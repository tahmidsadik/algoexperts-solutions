# Move Element To End

You're given an array of integers and an integer. Write a function that moves
all instances of that integer in the array to the end of the array and returns
the array.

The function should perform this in place (i.e., it should mutate the input
array) and doesn't need to maintain the order of the other integers.

### Sample Input

```
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
```

### Sample Output

```
[1, 3, 4, 2, 2, 2, 2, 2]
```

## Time Complexity

O(n + m) - where n is the length of the array and m is the number of elements to move

## Space Coplexity

O(n) - where n is number of items to move
