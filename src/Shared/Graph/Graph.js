const Graph = (dependencies) => {
  const visited = {};
  const order = [];

  const dfs = (node) => {
    if (!visited[node]) {
      visited[node] = true;
      if (dependencies[node]) {
        dependencies[node].forEach((dep) => {
          dfs(dep);
        });
      }
      order.push(node);
    }
  };

  Object.keys(dependencies).forEach((dep) => {
    dfs(dep);
  });

  return order.join(", ");
};

export default Graph;

// Alguns exemplos de teste

// const dependencies = {
//   A: ["E", "C"],
//   B: ["A"],
//   C: [],
//   D: ["A"],
//   E: [],
// };

// const dependencies = {
//   A: ["B", "C"],
//   B: [],
//   C: [],
//   D: ["E"],
//   E: [],
// };

// const dependencies = {
//   A: ["B"],
//   B: ["C"],
//   C: ["D"],
//   D: [],
//   E: ["A"],
// };

// const dependencies = {
//   A: [],
//   B: [],
//   C: ["A", "B", "D"],
//   D: [],
//   E: ["A"],
// };
