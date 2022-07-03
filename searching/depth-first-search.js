
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const root = new Node(9);
root.left = new Node(4);
root.left.left = new Node(1);
root.left.right = new Node(5);
root.right = new Node(13);
root.right.left = new Node(10);
root.right.right = new Node(15);

function depthFirstSearchPreOrder(root) {
    let result = [];

    result.push(root.value);

    if (root.left) {
        result = result.concat(depthFirstSearchPreOrder(root.left));
    }
    if (root.right) {
        result = result.concat(depthFirstSearchPreOrder(root.right));
    }
    return result;
}

console.log(depthFirstSearchPreOrder(root));

function depthFirstSearchInOrder(root) {
    let result = [];

    if (root.left) {
        result = result.concat(depthFirstSearchInOrder(root.left));
    }

    result.push(root.value);

    if (root.right) {
        result = result.concat(depthFirstSearchInOrder(root.right));
    }
    return result;
}

console.log(depthFirstSearchInOrder(root));

function depthFirstSearchPostOrder(root) {
    let result = [];

    if (root.left) {
        result = result.concat(depthFirstSearchPostOrder(root.left));
    }
    if (root.right) {
        result = result.concat(depthFirstSearchPostOrder(root.right));
    }
    result.push(root.value);
    return result;
}

console.log(depthFirstSearchPostOrder(root));