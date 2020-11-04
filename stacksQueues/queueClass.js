//Creating a queue using an array
let q = []

//adds element to queue
// q.push("FIRST")
// q.push("SECOND")
// q.push("THIRD")

//removes element from begining of queue to keep line
// q.shift()

//You could also do unshift and pop to get the same effect


//For a queue class, we add to end, take from beginning. This works well with singly linked lists
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}