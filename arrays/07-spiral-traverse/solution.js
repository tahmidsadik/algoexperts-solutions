function spiralTraverse(array) {
  // Write your code here.

  let startingRow = 0,
    endingRow = array.length - 1;
  let startingCol = 0,
    endingCol = array[0].length - 1;

  let resultArray = [];

  while (startingRow <= endingRow && startingCol <= endingCol) {
    for (let i = startingCol; i <= endingCol; i++) {
      resultArray.push(array[startingRow][i]);
    }

    for (let i = startingRow + 1; i <= endingRow; i++) {
      resultArray.push(array[i][endingCol]);
    }

    for (let i = endingCol - 1; i >= startingCol; i--) {
      if (startingRow === endingRow) {
        break;
      }
      resultArray.push(array[endingRow][i]);
    }

    for (let i = endingRow - 1; i > startingRow; i--) {
      if (startingCol === endingCol) {
        break;
      }
      resultArray.push(array[i][startingCol]);
    }
    startingCol++;
    startingRow++;
    endingCol--;
    endingRow--;
  }
  return resultArray;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;

if (require.main === module) {
  const assert = require("assert");

  const matrix = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ];
  const expectedOutput = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
  ];

  const output = spiralTraverse(matrix);
  assert.deepStrictEqual(output, expectedOutput);
}
