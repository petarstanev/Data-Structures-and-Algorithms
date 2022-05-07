class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const insertNode = new Node(value);
        if (this.root) {
            let currentNode = this.root;
            while (true) {
                // Left
                if (currentNode.value > value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = insertNode;
                        return;
                    }
                } else {
                    // right
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = insertNode;
                        return;
                    }
                }
            }
        } else {
            this.root = insertNode;
        }
    }

    lookup(value) {
        if (this.root) {
            let selectNode = this.root;
            while (selectNode) {
                if (selectNode.value === value) {
                    return selectNode;
                } else if (selectNode.value > value) {
                    // Left
                    selectNode = selectNode.left;
                } else {
                    // Right
                    selectNode = selectNode.right;
                }
            }
        }
        return null;
    }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);

console.log(tree.lookup(9));
console.log(tree.lookup(2));
console.log(tree.lookup(1));
console.log(tree.lookup(155));
console.log(tree.lookup(20));