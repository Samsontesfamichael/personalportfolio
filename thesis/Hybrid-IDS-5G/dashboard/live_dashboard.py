import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import plotly.graph_objs as go
import numpy as np
import time

# Placeholder for a live dashboard
# In a real scenario, this would connect to a stream of data or a database

app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1("Hybrid IDS Live Monitor"),
    dcc.Graph(id='live-update-graph'),
    dcc.Interval(
        id='interval-component',
        interval=1000, # in milliseconds
        n_intervals=0
    )
])

@app.callback(Output('live-update-graph', 'figure'),
              Input('interval-component', 'n_intervals'))
def update_graph_live(n):
    # Simulate live anomaly scores
    x_data = np.arange(n, n+20)
    y_data = np.random.normal(0.3, 0.1, 20) # Normal traffic simulation
    
    # Occasionally inject an anomaly
    if n % 5 == 0:
        y_data[10] = 0.9 

    fig = go.Figure(data=[go.Scatter(x=x_data, y=y_data, mode='lines+markers')])
    fig.update_layout(title='Real-time Anomaly Scores', xaxis_title='Time', yaxis_title='Score')
    return fig

if __name__ == '__main__':
    app.run_server(debug=True)
