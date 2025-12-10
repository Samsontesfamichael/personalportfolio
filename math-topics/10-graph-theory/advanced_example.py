import networkx as nx

# Shortest path (Dijkstra)

G = nx.Graph()
G.add_weighted_edges_from([
    (1, 2, 4),
    (1, 3, 1),
    (3, 2, 2),
    (2, 4, 1)
])

path = nx.shortest_path(G, source=1, target=4, weight="weight")
print("Shortest path:", path)
