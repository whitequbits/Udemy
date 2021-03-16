#

## Summary of Graphs

### Type of Graphs

Directed vs Undirected

![directedvsundirectd](directed-vs-undirected.png)

Weighted vs Unweighted

![weightedvsunweighted](weighted-vs-unweighted.jpeg)

Cyclic vs Acyclic

![cyclicvsacyclic](cyclic_acyclic.png)

### Method to Build Graphs

![buildgraphs](graphs-example.png)

Edge List

```javascript
//using array, where graphs[0] is currentNode and graphs[1] is linkedNode
const graphs = [
  [0, 2],
  [1, 3],
  [2, 1],
  [2, 3]
];
```

Adjacent List

```javascript
//using hash that describe connection
const graphs = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2]
};
```

Adjacent Matrix

```javascript
//using matrix 1(linked) and 0(not linked)
const graphs = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
};
```
