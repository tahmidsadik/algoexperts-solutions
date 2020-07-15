function findClosestValueInBst(tree, target) {
  // Write your code here.

  return traverse(tree, target, { closestDistance: Infinity, value: null });
}

function traverse(tree, target, distanceData) {
  const newDistance = Math.abs(tree.value - target);

  if (newDistance < distanceData.closestDistance) {
    distanceData.closestDistance = newDistance;
    distanceData.value = tree.value;
  }

  if (target > tree.value && tree.right) {
    return traverse(tree.right, target, distanceData);
  } else if (target < tree.value && tree.left) {
    return traverse(tree.left, target, distanceData);
  }

  return distanceData.value;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

if (require.main === module) {
  const assert = require("assert").strict;

  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);
  const expected = 13;
  const actual = findClosestValueInBst(root, 12);

  assert.deepStrictEqual(actual, expected);
}
