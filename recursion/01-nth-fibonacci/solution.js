function getNthFib(n) {
  // Write your code here.
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  return getNthFib(n - 1) + getNthFib(n - 2);
}

// Do not edit the line below.
exports.getNthFib = getNthFib;

if (require.main === module) {
  const assert = require("assert").strict;

  assert.deepStrictEqual(getNthFib(1), 0);
  assert.deepStrictEqual(getNthFib(2), 1);
  assert.deepStrictEqual(getNthFib(3), 1);
  assert.deepStrictEqual(getNthFib(4), 2);
  assert.deepStrictEqual(getNthFib(5), 3);
  assert.deepStrictEqual(getNthFib(6), 5);
  assert.deepStrictEqual(getNthFib(7), 8);
  assert.deepStrictEqual(getNthFib(8), 13);
  assert.deepStrictEqual(getNthFib(9), 21);
  assert.deepStrictEqual(getNthFib(10), 34);
}
