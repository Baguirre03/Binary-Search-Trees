import { prettyPrint, Tree } from "./tree.js"
function randomArray(size) {
    let array = []
    while (array.length <= size) {
        array.push(Math.round(Math.random() * size))
    }
    return array
}

function testTree() {
    const tree = new Tree(randomArray(20))
    prettyPrint(tree.tree)

    console.log('IS BALANCED:', tree.isBalanced())

    console.log('////LEVELORDER////')
    tree.levelOrder(tree.tree)

    console.log('////PREORDER////')
    tree.preorder(tree.tree)

    console.log('////POSTORDER////')
    tree.postorder(tree.tree)

    console.log('////INORDER////')
    tree.inorder(tree.tree)

    tree.insert(110)
    tree.insert(200)
    tree.insert(655)
    tree.insert(323)

    console.log('////INORDER + INSERTED////')
    tree.inorder(tree.tree)

    prettyPrint(tree.tree)
    console.log('balanced?')
    tree.isBalanced()
}

testTree()