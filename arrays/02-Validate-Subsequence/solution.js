function isValidSubsequence(array, sequence) {
  let idx_in_array_to_start_matching_from = 0;

  for (const [idx, s] of sequence.entries()) {
    let match_found = false;
    for (let j = idx_in_array_to_start_matching_from; j < array.length; j++) {
      if (array[j] === s) {
        // we have found a match and saving the idx from which we should start
        // searching for the next match
        idx_in_array_to_start_matching_from = j + 1;
        match_found = true;
        break;
      }
    }

    // we have traversed the whole array and haven't found a match - definitely not a subsequence
    if (match_found === false) {
      return false;
    }

    // we have found a match at this point
    // but the subsequence would still be invalid if
    // at least one item is left to validate in the subsequence
    // and no item is left in the array to validate against.
    // Which means not a valid sub-sequence
    if (
      idx < sequence.length - 1 &&
      idx_in_array_to_start_matching_from >= array.length
    ) {
      return false;
    }
  }

  // we have been able to exit the loop naturally
  // that can mean only one thing
  // the subsequence is VALID !!!!
  return true;
}

if (require.main === module) {
  const assert = require("assert").strict;

  const inputArray = [5, 1, 22, 25, 6, -1, 8, 10];
  const subsequence = [1, 6, -1, 10];

  const inputArray2 = [5, 1, 22, 25, 6, -1, 8, 10];
  const subsequence2 = [5, 1, 22, 6, -1, 8, 10];

  assert.deepStrictEqual(isValidSubsequence(inputArray, subsequence), true);
  assert.deepStrictEqual(isValidSubsequence(inputArray2, subsequence2), true);
}
