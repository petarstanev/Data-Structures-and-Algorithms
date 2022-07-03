
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

//       9 
//   4        13
// 1   5   10    15
const root = new Node(9);
root.left = new Node(4);
root.left.left = new Node(1);
root.left.right = new Node(5);
root.right = new Node(13);
root.right.left = new Node(10);
root.right.right = new Node(15);

function breadthFirstSearch(root) {
    const result = [];
    const queue = [];

    if (root) {
        queue.push(root);
    }

    while (queue.length > 0) {
        const select = queue.shift();
        result.push(select.value);

        if (select.left) {
            queue.push(select.left);
        }
        if (select.right) {
            queue.push(select.right);
        }
    }
    return result;
}

breadthFirstSearch(root);

function breadthFirstSearchRecursive(queue, result) {
    const select = queue.shift();
    result.push(select.value);
    if (select.left) {
        queue.push(select.left);
    }

    if (select.right) {
        queue.push(select.right);
    }

    if (queue.length > 0) {
        breadthFirstSearchRecursive(queue, result);
    }

    return result
}

breadthFirstSearchRecursive([root], []);
