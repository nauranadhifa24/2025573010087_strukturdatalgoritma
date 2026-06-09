class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // O(1)
    push(data) {
        this.stack.push(data);

        if (
            this.minStack.length === 0 ||
            data <= this.getMin()
        ) {
            this.minStack.push(data);
        }
    }

    // O(1)
    pop() {
        if (this.stack.length === 0) return null;

        const nilai = this.stack.pop();

        if (nilai === this.getMin()) {
            this.minStack.pop();
        }

        return nilai;
    }

    // O(1)
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // O(1)
    getMin() {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    }

    // O(1)
    isEmpty() {
        return this.stack.length === 0;
    }

    print() {
        console.log("Stack :", this.stack);
    }
}

// Pengujian
const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

ms.print();

console.log("getMin() =", ms.getMin());

console.log("pop() =", ms.pop());
console.log("getMin() =", ms.getMin());

console.log("pop() =", ms.pop());
console.log("getMin() =", ms.getMin());