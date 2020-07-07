function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 1) {
    return true;
  }

  let increasing = true,
    decreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      increasing = false;
    }

    if (array[i] > array[i - 1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

if (require.main === module) {
  const assert = require("assert").strict;

  const inputArray = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
  const inputArray2 = [];
  const inputArray3 = [2, 1];
  const inputArray4 = [1, 2, -1, -2, -5];

  assert.deepStrictEqual(isMonotonic(inputArray), true);
  assert.deepStrictEqual(isMonotonic(inputArray2), true);
  assert.deepStrictEqual(isMonotonic(inputArray3), true);
  assert.deepStrictEqual(isMonotonic(inputArray4), false);
}
