class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val)

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    pop(){
        if (this.size === 0) return null;
        let oldFirst = this.first
        if (this.size === 1) {
            this.last = null
        }  
        this.first = oldFirst.next
        oldFirst.next = null
        this.size--
        
        return oldFirst.value
    }

}


let stack = new Stack()

console.log(stack.push("hello"))
console.log(stack.push("hi"))
console.log(stack)

