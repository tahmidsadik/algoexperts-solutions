// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    this.children.forEach((node) => {
      node.depthFirstSearch(array);
    });
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;

if (require.main === module) {
  const assert = require("assert");

  let graph = new Node("A");
  graph.addChild("B").addChild("C").addChild("D");
  graph.children[0].addChild("E").addChild("F");
  graph.children[2].addChild("G").addChild("H");
  graph.children[0].children[1].addChild("I").addChild("J");
  graph.children[2].children[0].addChild("K");

  const output = graph.depthFirstSearch([]);
  const expectedOutput = [
    "A",
    "B",
    "E",
    "F",
    "I",
    "J",
    "C",
    "D",
    "G",
    "K",
    "H",
  ];

  assert.deepStrictEqual(output, expectedOutput);
}
