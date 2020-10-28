// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null
            this.tail = null
            return undefined
        }

        let tail = this.tail
        let current = this.head

        while (current.next !== tail) {
            current = current.next
        }
        this.tail = current
        this.tail.next = null
        this.length--
        
        return tail
    }

    shift(){
        if (this.length === 0) return undefined
        if (this.length ===1) {
            this.head = null
            this.tail = null
            return undefined
        }

        let newHead = this.head.next
        this.head.next = null
        let oldhead = this.head
        this.head = newHead
        this.length--
        return oldhead
    }

    unshift(val){
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index){
        if (index < 0 || index >= this.length) {
            return null
        }

        let counter = 0
        let node = this.head
        while (counter < index) {
            node = node.next
            counter++
        }
        return node
    }

    set(index, value) {
        let node = this.get(index)
        if (node === null) return false;
        node.value = value
        return true
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(value)
        if (index === 0) return !!this.unshift(value)

            let pos = this.get(index - 1)
            let newNode = new Node(value)
            let prevNext = pos.next
            pos.next = newNode
            newNode.next = prevNext
            this.length++
            return true

    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        let pos = this.get(index - 1)
        let byebye = pos.next
        pos.next = byebye.next
        this.length--
        return byebye
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }

      print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }

}



var list = new SinglyLinkedList()
list.push("NY")
list.push("I")
list.push("love")
list.push("you")
list.push("but")
list.push("you're")
list.push("bringing")
list.push("me")
list.push("down")

console.log(list.remove(8))

//console.log(list)
