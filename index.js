class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    setLeft(node) {
        this.left = node
    }

    setRight(node) {
        this.right = node
    }

    insert(node) {
        
    }
}

class Tree {
    constructor(array) {
        this.array = array
    }

    root() {
        let unique = [...new Set(this.array)];
        unique.sort((a,b) => a-b)
        return prettyPrint(buildTree(unique, 0, unique.length - 1))
    }
}

function buildTree(array, start, end) {
    let mid = parseInt((start + end) / 2)
    let node = new Node(array[mid])
    if(start > end) {
        return null
    }
    node.setLeft(buildTree(array, start, mid - 1))
    node.setRight(buildTree(array, mid + 1, end))
    return node
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67])
tree.root()