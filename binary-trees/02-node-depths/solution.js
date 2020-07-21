function nodeDepths(root) {
  // Write your code here.
  return traverse(root, 0, 0);
}

function traverse(tree, depth, depthSum) {
  let left = 0,
    right = 0;
  if (tree.left) {
    left = traverse(tree.left, depth + 1, depthSum);
  }

  if (tree.right) {
    right = traverse(tree.right, depth + 1, depthSum);
  }

  if (!(tree.left || tree.right)) {
    return depth + depthSum;
  }

  return left + right + depth;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;

if (require.main === module) {
  const assert = require("assert").strict;

  const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.left.left = new BinaryTree(4);
  root.left.left.left = new BinaryTree(8);
  root.left.left.right = new BinaryTree(9);
  root.left.right = new BinaryTree(5);
  root.right = new BinaryTree(3);
  root.right.left = new BinaryTree(6);
  root.right.right = new BinaryTree(7);
  const actual = nodeDepths(root);
  const expected = 16;

  assert.deepStrictEqual(expected, actual);
}
