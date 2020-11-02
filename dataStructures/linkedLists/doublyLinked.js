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

    shift(){
        if (this.length === 0) return undefined;
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.previous = null;
        }
        length--
        return oldHead
    }

    unshift(val){
        let newNode = new Node(val)

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode
            newNode.next = this.head
            this.head = newNode
        }
        length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter, node;
        if (index <= this.length / 2) {
            counter = 0
            node = this.head
            while (counter < index) {
                node = node.next
                counter++
            }
        } else {
            counter = this.length - 1
            node = this.tail
            while (counter > index) {
                node = node.previous
                counter--
            }
        }
        return node
    }

    set(index, value){
        let node = this.get(index)
        if (node) node.val = value
        return node ? true : false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        let removedNode = this.get(index)
        removedNode.previous.next = removedNode.next;
        removedNode.next.previous = removedNode.previous;
        removedNode.next = null;
        removedNode.previous = null;

        this.length--;
        return removedNode;
    }

}

var list = new DoublyLinkedLists()
list.push("NY")
list.push("I")
list.push("love")
list.push("you")
list.push("but")
list.push("you're")
list.push("bringing")
list.push("me")
list.push("down")

console.log(list.set(2, "like"))
console.log(list.get(2))