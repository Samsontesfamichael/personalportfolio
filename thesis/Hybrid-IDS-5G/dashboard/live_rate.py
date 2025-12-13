import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import plotly.graph_objs as go
import numpy as np
import datetime

# Initialize the app
app = dash.Dash(__name__)

# App Layout
app.layout = html.Div(style={'fontFamily': 'Helvetica, sans-serif', 'maxWidth': '1000px', 'margin': 'auto', 'padding': '20px'}, children=[
    
    # Header Section
    html.Div([
        html.H1("Hybrid IDS Live Monitor", style={'textAlign': 'center', 'color': '#2c3e50'}),
        html.P("Real-time Network Traffic Anomaly Detection", style={'textAlign': 'center', 'color': '#7f8c8d'}),
    ], style={'marginBottom': '30px'}),

    # Status Indicators
    html.Div([
        html.Div([
            html.H3("System Status", style={'margin': '0', 'fontSize': '18px'}),
            html.Div(id='status-badge', children="Initializing...", style={
                'padding': '10px 20px', 'borderRadius': '5px', 'color': 'white', 
                'fontWeight': 'bold', 'marginTop': '5px', 'textAlign': 'center'
            })
        ], style={'width': '200px', 'padding': '15px', 'boxShadow': '0 2px 5px rgba(0,0,0,0.1)', 'borderRadius': '8px'}),
        
        # Traffic Stats Box (Updated with Granular Rates)
        html.Div([
            html.H3("Traffic Stats", style={'margin': '0', 'fontSize': '18px'}),
            html.Div(id='traffic-stats', children="Calculating...", style={'marginTop': '10px', 'fontSize': '16px', 'lineHeight': '1.5'})
        ], style={'width': '250px', 'padding': '15px', 'boxShadow': '0 2px 5px rgba(0,0,0,0.1)', 'borderRadius': '8px', 'textAlign': 'left'}),

        html.Div([
            html.H3("Last Update", style={'margin': '0', 'fontSize': '18px'}),
            html.Div(id='time-badge', children="--:--:--", style={'marginTop': '10px', 'fontSize': '20px'})
        ], style={'width': '200px', 'padding': '15px', 'boxShadow': '0 2px 5px rgba(0,0,0,0.1)', 'borderRadius': '8px', 'textAlign': 'center'}),

    ], style={'display': 'flex', 'justifyContent': 'space-around', 'marginBottom': '30px'}),

    # Graph Section
    html.Div([
        dcc.Graph(id='live-update-graph', animate=False),
        dcc.Interval(
            id='interval-component',
            interval=2000, # Update every 2 seconds
            n_intervals=0
        )
    ], style={'boxShadow': '0 4px 8px rgba(0,0,0,0.1)', 'padding': '10px', 'borderRadius': '8px', 'backgroundColor': 'white'}),

    # Legend / Info
    html.Div([
        html.Div([
            html.Span("●", style={'color': '#0074D9', 'fontSize': '20px', 'marginRight': '5px'}),
            html.Span("Normal Traffic (< 0.8)", style={'marginRight': '20px'}),
            html.Span("●", style={'color': '#e74c3c', 'fontSize': '20px', 'marginRight': '5px'}),
            html.Span("Anomaly / Attack (> 0.8)")
        ], style={'marginTop': '10px', 'textAlign': 'center'})
    ])
])

# Global counters for simulation
global_total_traffic = 0
global_total_anomalies = 0

@app.callback(
    [Output('live-update-graph', 'figure'),
     Output('status-badge', 'children'),
     Output('status-badge', 'style'),
     Output('time-badge', 'children'),
     Output('traffic-stats', 'children')],
    [Input('interval-component', 'n_intervals')]
)
def update_metrics(n):
    global global_total_traffic, global_total_anomalies
    
    # 1. Simulate Data
    time_window = 30
    x_data = list(range(n, n + time_window))
    y_data = np.random.normal(0.3, 0.1, time_window)
    
    # Inject occasional anomalies
    if n % 7 == 0:
        y_data[-1] = np.random.uniform(0.9, 1.5)
    
    # Random historical spikes
    for i in range(len(y_data)):
        if np.random.random() > 0.95:
             y_data[i] = np.random.uniform(0.8, 1.2)

    # 2. Update Global Stats
    batch_size = np.random.randint(50, 200) # Simulate 50-200 packets arriving per 2s
    global_total_traffic += batch_size
    
    current_anomalies = 0
    # Check if current point is anomaly
    if y_data[-1] > 0.8:
        current_anomalies = np.random.randint(1, int(batch_size * 0.3)) # Up to 30% attack traffic if active
        global_total_anomalies += current_anomalies
    
    current_normal = batch_size - current_anomalies

    # Calculate Rates (packets per second)
    total_rate = batch_size / 2.0
    normal_rate = current_normal / 2.0
    attack_rate = current_anomalies / 2.0
    
    # Create Stats Element
    stats_element = html.Div([
        html.Div([html.B("Total Rate: "), f"{total_rate:.0f} pkts/sec"]),
        html.Hr(style={'margin': '5px 0'}),
        html.Div([html.B("Normal Rate: "), f"{normal_rate:.0f} pkts/sec"], style={'color': '#0074D9'}),
        html.Div([html.B("Attack Rate: "), f"{attack_rate:.0f} pkts/sec"], style={'color': '#e74c3c'}),
        html.Hr(style={'margin': '5px 0'}),
        html.Div([html.Small(f"Total packets: {global_total_traffic:,}")])
    ])

    # 3. Create Graph
    colors = []
    marker_sizes = []
    for val in y_data:
        if val > 0.8:
            colors.append('#e74c3c')
            marker_sizes.append(12)
        else:
            colors.append('#0074D9')
            marker_sizes.append(8)
    
    fig = go.Figure()
    fig.add_trace(go.Scatter(
        x=x_data, y=y_data, mode='lines',
        line=dict(color='#bdc3c7', width=1), showlegend=False
    ))
    fig.add_trace(go.Scatter(
        x=x_data, y=y_data, mode='markers',
        marker=dict(color=colors, size=marker_sizes, line=dict(width=1, color='white')),
        name='Traffic', hovertemplate='Score: %{y:.2f}<extra></extra>'
    ))
    fig.add_shape(type="line", x0=min(x_data), x1=max(x_data), y0=0.8, y1=0.8,
        line=dict(color="orange", width=2, dash="dash"))
    fig.update_layout(
        title="Real-time Anomaly Scores", xaxis_title="Time Sequence", yaxis_title="Anomaly Score",
        yaxis=dict(range=[0, 2.0]), template='plotly_white', margin=dict(l=40, r=40, t=50, b=40)
    )

    # 4. System Status
    is_danger = any(y > 0.8 for y in y_data[-5:])
    if is_danger:
        status_text = "WARNING"
        status_style = {'backgroundColor': '#e74c3c', 'color': 'white', 'padding': '10px', 'borderRadius': '5px', 'textAlign': 'center', 'fontWeight': 'bold'}
    else:
        status_text = "NORMAL"
        status_style = {'backgroundColor': '#27ae60', 'color': 'white', 'padding': '10px', 'borderRadius': '5px', 'textAlign': 'center', 'fontWeight': 'bold'}

    current_time = datetime.datetime.now().strftime("%H:%M:%S")

    return fig, status_text, status_style, current_time, stats_element

if __name__ == '__main__':
    app.run(debug=True)
