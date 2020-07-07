function moveElementToEnd(array, toMove) {
  let resultArray = [],
    toMoveCount = 0;
  for (let i of array) {
    if (i === toMove) {
      toMoveCount++;
    } else {
      resultArray.push(i);
    }
  }

  for (let i = 0; i < toMoveCount; i++) {
    resultArray.push(toMove);
  }

  return resultArray;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

if (require.main === module) {
  const assert = require("assert").strict;
  const sortAscending = (array) => array.sort((a, b) => a - b);

  const array = [2, 1, 2, 2, 2, 3, 4, 2];
  const toMove = 2;

  const output = moveElementToEnd(array, toMove);

  const expectedStart = [1, 3, 4];
  const expectedEnd = [2, 2, 2, 2, 2];

  assert.deepStrictEqual(sortAscending(output.slice(0, 3)), expectedStart);
  assert.deepStrictEqual(sortAscending(output.slice(3)), expectedEnd);
}
