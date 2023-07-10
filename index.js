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
}

class Tree {
    constructor(array) {
        this.array = array
        this.sorted = this.sortArray()
        this.tree = this.root()
    }

    sortArray() {
        let unqiue = [...new Set(this.array)];
        unqiue.sort((a,b) => a-b)
        return unqiue
    }

    //builds initial tree and stroes in this.tree for insert functions
    root() {
        return buildTree(this.sorted, 0, this.sorted.length - 1)
    }

    insert(data) {
        this.insertRec(this.tree, data)
    }

    insertRec(root, key) {
        if(root == null) {
            root = new Node(key)
            return root
        }
        if (key < root.data) {
            root.setLeft(this.insertRec(root.left, key))
        } else if (key > root.data) {
            root.setRight(this.insertRec(root.right, key))
        }
        return this.tree = root
    }

    delete(key) {
        this.deleteRec(this.tree, key)
    }

    deleteRec(root, key) {
        if(root === null) {
            return root
        }

        if(root.data > key) {
            root.setLeft(this.deleteRec(root.left, key))
            return root
        } else if (root.data < key) {
            root.setRight(this.deleteRec(root.right, key))
            return root
        }

        if(root.left === null) {
            let temp = root.right
            root = null
            return temp
        } else if(root.right === null) {
            let temp = root.left
            root = null
            return temp
        } else {
            let succParent = root
            let succ = root.right
            while(succ.left !== null) {
                succParent = succ
                succ = succ.left
            }
            if(succParent !== root) {
                succParent.left = succ.right
            } else {
                succParent.right = succ.right
            }
            root.data = succ.data
            succ = null
            return root
        }
    }

    find(value) {
        this.findRec(this.tree, value)
    }

    findRec(root, key) {
        if(root.data === key) {
            console.log(root)
            return root
        }
        if (root.data > key) {
            this.findRec(root.left, key)
            return root
        } else if (root.data < key) {
            this.findRec(root.right, key)
            return root
        }
     }

     levelOrder(tree, queue = [tree]) {
        if(tree === this.root()) {
            return this.array
        }
        if (queue.length == 0) {
            return 
        }
        queue.splice(0, 1)
        if(tree == null) {
            return this.levelOrder(queue[0], queue)
        }
        console.log(tree.data)
        queue.push(tree.left, tree.right)
        this.levelOrder(queue[0], queue)
        return 

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

// const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 132, 213, 3333, 213254,34])
const tree = new Tree([2, 5, 3, 10, 20])
// const tree = new Tree([10, 20, 30, 40, 50, 60])
prettyPrint(tree.tree)
// tree.insert(55)
// tree.insert(100)
// tree.delete(7)
// tree.find(132)
// console.log(tree.levelOrder(tree.root()))
tree.levelOrder(tree.root())