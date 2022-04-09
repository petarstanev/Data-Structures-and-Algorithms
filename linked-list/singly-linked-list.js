class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: value
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepand(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    traversToIndex(index) {
        let currentNode = this.head;
        let i = 0;
        while (i !== index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return undefined;
        } else if (index === 0) {
            this.prepand(value);
        } else {
            let selectedNode = this.traversToIndex(index - 1);
            let newNode = new Node(value);
            newNode.next = selectedNode.next;
            selectedNode.next = newNode;
            this.length++;
        }
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        } else if (index === 0) {
            this.head = this.head.next;
            this.length--;
        } else {
            let selectedNode = this.traversToIndex(index - 1);
            let removeNode = selectedNode.next;
            selectedNode.next = removeNode.next;
            this.length--;

            if (selectedNode.next === null) {
                this.tail = selectedNode;
            }
        }
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList(10);
list.append(5);
list.append(16);
list.prepand(1);
console.log(list.printList());
list.insert(2,3);
console.log(list.printList());
list.remove(3);
console.log(list.printList());

