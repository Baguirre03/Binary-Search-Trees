# Binary-Search-Trees

### [**Link to Assignment**](https://www.theodinproject.com/lessons/javascript-binary-search-trees)

Binary search trees - where you take a group of data items and turn them into a tree full of nodes, where each left node is "lower" than each right node.

## What I learned

This project took unnecessarily long, that was because I got quite busy just doing other things and didn't really have time for this project. Although I did have a lot of fun doing it, and learned a lot about how to implement a binary search tree! 

## Features

- Built a `Node` class
- Built a `Tree` class which accepts an array for initialization
- `buildTree` function which takes the array of data and turns it into a balanced binary tree full of Nodes (removes duplicates as well)
- `insert` and `delete` - accepts a value to insert/delete
- `find` - accepts a value and returns the node with the given value
- `levelOrder` - takes a function as a parameter, traverse's the tree in breadth-first level order.
- `inorder`, `preorder`, `postorder` - traverses the tree in their respective depth-first order
- `height` - accepts a node and returns its height
- `depth` - accepts a node and returns its depth
- `isBalanced` - checks if the tree is balanced (left subtree and right subtree of every node is not more than 1)
- `reblance` - rebalances an unbalanced tree

## Tying it all together 

Here I wrote a driver script inside of `driver.js` where I did the following:
1. Create a binary search tree from an array of random numbers < 100
2. Confirm the tree is balanced with `isBalanced`
3. Print out the elements in level, pre, post, and in order
4. Unbalance the tree vt adding several numbers > 100
5. Confirm the tree is unbalanced with `isBalanced`
6. Balance the tree with `rebalance`
7. Confirm the tree has been balanced with `isBalanced`
8. Print out all elements again in level, pre, post, and in order

### _All of this is ran inside of `driver.js` and can be ran with `node driver.js` to be shown within the terminal_