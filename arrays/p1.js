/** 
 * Problem statement 
 * Two Number Sum
 * 
 * Write a function that takes in a non-empty array of distinct integers and an
 * integer representing a target sum. If any two numbers in the input array sum
 * up to the target sum, the function should return them in an array, in any
 * order. If no two numbers sum up to the target sum, the function should return
 * an empty array.
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
	for (let i of array) {
		numberMap[i] = 1;
	}
	for(const currentVal of array) {
		const lookFor = targetSum - currentVal;
    // we need to check that the currentVal and the number to look for aren't
    // the smae, because the numbers in the array are distinct. 
		if( currentVal !== lookFor && numberMap[lookFor]) {
			return [currentVal, lookFor];
		}
	}

	return [];
}

