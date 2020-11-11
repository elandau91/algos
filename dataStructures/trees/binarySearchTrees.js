class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val)

        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true){
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                } 
            }

        }

    }

    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    bfs(){
        let queue = []
        let visited = []
        let current = this.root

        queue.push(this.root)
            while (queue.length) {
                current = queue.shift()
                visited.push(current)
                
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
    
          return visited  
    }

    dfsPreorder(){
        let data = []
        let current = this.root

        function traverse(node){
            data.push(node)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(current)
        return data
    }

    dfsPostorder(){
        let data = []
        let current = this.root
    
        function traverse(node){
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node)
        }
    
        traverse(current)
        return data
    }

    dfsInorder(){
        let data = []
        let current = this.root
    
        function traverse(node){
            if (node.left) traverse(node.left)
            data.push(node)
            if (node.right) traverse(node.right)
        }
    
        traverse(current)
        return data
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
console.log(tree)



