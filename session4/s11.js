// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

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

inp.on("close", () => {
    let words = userInput[0].split(' ');

    let stack = new Stack();

    for (let word of words) {
        if (stack.isEmpty()) {
            stack.push(word);
        } else {
            if (word == stack.peek()) {
                stack.pop();
            } else {
                stack.push(word);
            }
        }
    }

    if (!stack.isEmpty()) console.log(stack.items.join(' '));
    else console.log(-1);
});