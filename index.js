function depthFirstSearch(rootNode, vertices, edges) {
    let queue = [rootNode]
    let visited = [rootNode]
    while (queue.length > 0) {
        let currentNode = queue.pop()
        if (!currentNode.discovered) {
            currentNode.discovered = true
            let adjacentNodes = findAdjacent(currentNode, vertices, edges)
            adjacentNodes.forEach(node => {
                visited.push(node)
                queue.push(node)
            })
            queue = [...queue, ...adjacentNodes]
        }
    }
    return visited
}

function findAdjacent(currentNode, vertices, edges) {
    let adjacentEdges = edges.filter(edge => edge.includes(currentNode.name))
    let adjacentEdgeNames = adjacentEdges.map(edge => edge.find(name => name != currentNode.name))
    let adjacentVertices = adjacentEdgeNames.map(edgeName => vertices.find(vertice => vertice.name === edgeName))
    let undiscoveredAdjacentVertices = adjacentVertices.filter(vertice => !vertice.discovered)

    return undiscoveredAdjacentVertices
}