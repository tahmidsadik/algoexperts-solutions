# Find closest value in BST

Write a function that takes in a Binary Search Tree (BST) and a target integer
value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

<p>
Each <span>BST</span> node has an integer <span>value</span>, a
<span>left</span> child node, and a <span>right</span> child node. A node is
said to be a valid <span>BST</span> node if and only if it satisfies the BST
property: its <span>value</span> is strictly greater than the values of every
node to its left; its <span>value</span> is less than or equal to the values
of every node to its right; and its children nodes are either valid
<span>BST</span> nodes themselves or <span>None</span> / <span>null</span>.
</p>

### Sample Input

```
`tree` =  10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

`target` = 12
```

### Sample Output

```
13
```

## Time Complexity

Average Case - O(log(n)) time
Worst Case - O(n) time

## Space Complexity

O(log(n)) space complexity
