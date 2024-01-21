class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    isEmpty() {
        return this.top == -1;
    }

    peek() {
        if(!this.isEmpty()) return this.items[this.top];
    }
}

let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();stack.pop();stack.pop();

console.log(stack);