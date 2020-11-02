class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedLists {
    constructor(){
        this.head = null;
        this.tail =null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if (this.length === 0) return undefined;

        let oldTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let newTail = oldTail.previous
            newTail.next = null
            oldTail.previous = null
        }
        this.length--
        return oldTail
    }




}