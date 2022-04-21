class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        if (this.array.length === 0) {
            return undefined;
        }

        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        return this.array.pop();
    }

    isEmpty() {
        return this.array.length === 0;
    }
}

const st = new Stack();
st.push(2);
st.push(3);
console.log(st.pop());
console.log(st.peek());
console.log(st.isEmpty());
