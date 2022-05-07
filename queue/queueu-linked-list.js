class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const item = new Node(value);
        if (this.last === null) {
            this.first = item;
            this.last = item;
        } else {
            this.last.next = item;
            this.last = item;
        }
        this.length++;
    }

    dequeue() {
        if (this.first) {
            if (this.first === this.last) {
                this.last = null;
            }

            const item = this.first;
            this.first = item.next;
            this.length--;
            return this;
        }
        return undefined;
    }

    print(){
        let item = this.first;
        const array = [];
        while(item) {
            array.push(item.value);
            item = item.next;
        }

        console.log(array);
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

q.print();
q.dequeue();
q.print();
q.dequeue();
q.print();




