class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
}

let tree = new Tree()
let node1 = new Node(10)
tree.root = node1
let node2 = new Node(6)
node1.left = node2
let node3 = new Node(3)
node2.left = node3
let node4 = new Node(8)
node2.right = node4
let node5 = new Node(15)
node1.right = node5
let node6 = new Node(20)
node5.right = node6

function bfs(tree){
    let queue = []
    queue.push(tree.root)
    let visited = []
    
        while (queue.length >= 1) {
            let current = queue[0]
            queue.shift()
            visited.push(current)
            
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }

      return visited  
}

console.log(bfs(tree))

