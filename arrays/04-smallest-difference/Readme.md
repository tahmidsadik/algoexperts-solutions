# Smallest Difference

Write a function that takes in two non-empty arrays of integers, finds the
pair of numbers (one from each array) whose absolute difference is closest to
zero, and returns an array containing these two numbers, with the number from
the first array in the first position.

You can assume that there will only be one pair of numbers with the smallest
difference.

### Sample Input

```
arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]
```

### Sample Output

```
[28, 26]
```

## Time Complexity

Worst case time complexity is O(n + m).

For avg and best case - early exit should be considered.

## Space Coplexity

O(1) - As no extra space is needed
