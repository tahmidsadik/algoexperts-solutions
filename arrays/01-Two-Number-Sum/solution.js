/**
 * Problem statement
 * Two Number Sum
 *
 * Write a function that takes in a non-empty array of distinct integers and an
 * integer representing a target sum. If any two numbers in the input array sum
 * up to the target sum, the function should return them in an array, in any
 * order. If no two numbers sum up to the target sum, the function should return * an empty array.
 *
 * Note that the target sum has to be obtained by summing two different integers
 * in the array; you can't add a single integer to itself in order to obtain the
 * target sum.
 *
 * You can assume that there will be at most one pair of numbers summing up to
 * the target sum.
 *
 * Sample Input
 * array = [3, 5, -4, 8, 11, 1, -1, 6]
 * targetSum = 10
 *
 * Sample Output
 * [-1, 11]
 *
 * */

function twoNumberSum(array, targetSum) {
  const numberMap = {};
  for (const currentVal of array) {
    const lookFor = targetSum - currentVal;
    if (numberMap[lookFor]) {
      return [currentVal, lookFor];
    } else {
      numberMap[currentVal] = true;
    }
  }

  return [];
}

if (require.main === module) {
  const assert = require("assert").strict;

  const inputArray = [3, 5, -4, 8, 11, 1, -1, 6];
  const targetSum = 10;

  const output = twoNumberSum(inputArray, targetSum);

  assert.deepStrictEqual(output.length, 2);
  assert.deepStrictEqual(output.includes(-1), true);
  assert.deepStrictEqual(output.includes(11), true);
}
