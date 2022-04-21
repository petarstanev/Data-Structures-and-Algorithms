class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.lenght = 0;
    }

    peek() {
        return this.top.value;
    }

    push(value) {
        let node = new Node(value);
        if (this.top) {
            node.next = this.top;
        }
        this.top = node;
        this.lenght++;
    }

    pop() {
        if (this.top) {
            const node = this.top;
            this.top = this.top.next;
            this.lenght--;
            return node.value;
        }
        return undefined;
    }

    isEmpty() {
        return this.top == null;
    }
}

const st = new Stack( );
st.push(2);
st.push(3);
console.log(st.pop());
console.log(st.peek());
console.log(st.isEmpty());
