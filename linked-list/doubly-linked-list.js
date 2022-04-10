class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepand(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    traversToIndex(index) {
        if (this.length / 2 < index) {
            let currentNode = this.head;
            let i = 0;
            while (i !== index) {
                currentNode = currentNode.next;
                i++;
            }
            return currentNode;
        }

        let currentNode = this.tail;
        let i = this.length - 1;
        while (i !== index) {
            currentNode = currentNode.prev;
            i--;
        }
        return currentNode;
    }


    insert(index, value) {
        if (index === 0) {
            this.prepand(value);
        } else if (index >= this.length) {
            this.append(value);
        } else {
            let newNode = new Node(value);
            let leader = this.traversToIndex(index - 1);
            let follower = leader.next;

            leader.next = newNode;
            newNode.prev = leader;
            newNode.next = follower;
            follower.prev = newNode;

            this.length++;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        } else if (index === 0) {
            this.head = this.head.next;
        } else {
            let selectedNodeBefore = this.traversToIndex(index - 1);
            let removeNode = selectedNodeBefore.next;
            if (removeNode.next !== null) {
                let selectedNodeAfter = removeNode.next;
                selectedNodeBefore.next = selectedNodeAfter;
                selectedNodeAfter.prev = selectedNodeBefore;
            } else {
                selectedNodeBefore.next = null;
            }
        }
        this.length--;
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
        this.prev = null;
    }
}

const list = new LinkedList(1);
list.append(2);
console.log(list.printList());
list.insert(2, 3);
console.log(list.printList());
list.insert(2, 4);
console.log(list.printList());
list.remove(2);
console.log(list.printList());
list.remove(2);
console.log(list.printList());

