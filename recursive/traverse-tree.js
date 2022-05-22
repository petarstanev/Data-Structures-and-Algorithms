class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const node = new Node(3);
node.left = new Node(1);
node.left.left = new Node(2);
node.right = new Node(4);
node.right.right = new Node(5);
node.right.left = new Node(6);

function traverseTreeRecursive(node) {
    console.log(node.value);
    if (node.left) {
        traverseTreeRecursive(node.left);
    }

    if (node.right) {
        traverseTreeRecursive(node.right);
    }
}

traverseTreeRecursive(node);