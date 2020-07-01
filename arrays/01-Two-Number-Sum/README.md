# Two Number Sum

Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. If any two numbers in the input array sum
up to the target sum, the function should return them in an array, in any
order. If no two numbers sum up to the target sum, the function should return
an empty array.

Note that the target sum has to be obtained by summing two different integers
in the array; you can't add a single integer to itself in order to obtain the
target sum.

You can assume that there will be at most one pair of numbers summing up to
the target sum.

```
Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Sample Output
[-1, 11]
```

## Time complexity

Worst case time complexity is O(n) - as the whole array needs to be traversed.

Best case time complexity is O(1) - when we find the elements in the first iteration.

## Space Complexity

Space complexity would be O(n) as we will end up storing every number of the array in a map.
