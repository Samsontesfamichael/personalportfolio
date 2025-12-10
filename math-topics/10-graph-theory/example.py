import networkx as nx

G = nx.Graph()

G.add_edges_from([
    (1, 2),
    (2, 3),
    (3, 4),
    (4, 1)
])

print("Nodes:", G.nodes())
print("Edges:", G.edges())
print("Degrees:", dict(G.degree()))

# Perform BFS starting from node 1
bfs = list(nx.bfs_tree(G, source=1))
print("BFS order:", bfs)
