function smallestDifference(arrayOne, arrayTwo) {
  let i = 0,
    j = 0;
  const a1 = arrayOne.sort((a, b) => a - b);
  const a2 = arrayTwo.sort((a, b) => a - b);
  let minDistance = Math.abs(a1[0] - a2[0]);
  let result = {
    minDistance: Math.abs(a1[0] - a2[0]),
    minDistanceNums: [a1[0], a2[0]],
  };

  while (i < arrayOne.length && j < arrayTwo.length) {
    while (a1[i] < a2[j]) {
      if (i + 1 < a1.length && a1[i + 1] < a2[j]) {
        i++;
      } else {
        result =
          Math.abs(a1[i] - a2[j]) < result.minDistance
            ? {
                minDistance: Math.abs(a1[i] - a2[j]),
                minDistanceNums: [a1[i], a2[j]],
              }
            : result;
        i++;
      }
    }

    if (a1[i] === a2[j]) {
      return [a1[i], a2[j]];
    }

    while (a2[j] < a1[i]) {
      if (j + 1 < a2.length && a2[j + 1] < a1[i]) {
        j++;
      } else {
        result =
          Math.abs(a1[i] - a2[j]) < result.minDistance
            ? {
                minDistance: Math.abs(a1[i] - a2[j]),
                minDistanceNums: [a1[i], a2[j]],
              }
            : result;
        j++;
      }
    }
  }
  return result.minDistanceNums;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

if (require.main === module) {
  const assert = require("assert").strict;

  const inputArray1 = [-1, 5, 10, 20, 28, 3];
  const inputArray2 = [26, 134, 135, 15, 17];

  const output = smallestDifference(inputArray1, inputArray2);

  // const expectedOutput = [28, 26];

  assert.deepStrictEqual(output.includes(26), true);
  assert.deepStrictEqual(output.includes(28), true);
}
