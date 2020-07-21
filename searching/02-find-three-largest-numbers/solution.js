function findThreeLargestNumbers(array) {
  // Write your code here.
  let resultArray = [array[0], array[1], array[2]];

  resultArray = resultArray.sort((a, b) => a - b);

  for (let i = 3; i < array.length; i++) {
    resultArray = addNewItemAndShift(resultArray, array[i]);
  }

  return resultArray;
}

function addNewItemAndShift(arr, n) {
  let largerThanIdx = -1;

  let i = 0;
  while (i < arr.length) {
    if (n > arr[i]) {
      largerThanIdx++;
    } else {
      break;
    }

    i++;
  }

  if (largerThanIdx >= 0) {
    arr.splice(largerThanIdx + 1, 0, n);
    arr.shift();
  }

  return arr;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;

if (require.main === module) {
  const assert = require("assert");
  const inputArray = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
  const expectedOutput = [18, 141, 541];
  const output = findThreeLargestNumbers(inputArray);

  assert.deepStrictEqual(output, expectedOutput);
}
