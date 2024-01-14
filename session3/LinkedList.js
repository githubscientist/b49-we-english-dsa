// singly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    toArray() {
        let nodes = [];

        while (this.head != null) {
            nodes.push(this.head.data);
            this.head = this.head.next;
        }

        return nodes;
    }

    // insertAtTail
    push(data) {
        // create a new node and pack the data
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head == null) {
            // list is empty
            this.head = this.tail = newNode;
        } else {
            // list is not empty
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
    }

    // insertAtHead
    unshift(data) {
        let newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
    }

    whileEach(fn) {
        let index = 0;
        while (this.head != null) {
            fn(this.head.data, index++);
            this.head = this.head.next;
        }
    }
}

let list = new LinkedList();

// list.head = new Node(5);
// list.head.next = new Node(3);

list.push(5);
list.push(3);
list.push(6);
list.push(1);
list.push(2);

list.unshift(4);
list.unshift(10);
list.unshift(12);

// console.log(list.toArray());

list.whileEach((value, index) => {
    console.log(value, index);
})

/*
    list = LinkedList {
        head: Node {
            data: 5,
            next: Node {
                data: 3,
                next: null
            }
        },
        tail: null
    }
*/

// console.log(node1.data, node1.next.data);
// console.log(node2);

/*
    node1 = Node {
        data: 5,
        next: Node {
            data: 3,
            next: null
        }
    }

    node2 = Node {
        data: 3,
        next: null
    }
*/