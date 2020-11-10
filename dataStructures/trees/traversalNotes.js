//Tree Traversal

    //Two main approaches for traversing a tree
        //Breadth-First Search
        //Depth-First Search

    //Breadth-First Search (BFS)
        //Look at every sibling node in a tree, before moving on to next layer of children
        //To do BFS
            //Iteratively
                //Create a queue (this can be an array) and a variable to store the values of nodes visited
                    //push to add things in, shift to remove from beginning, first in, first out
                //Place root node in queue
                //Loop as long as there is anything in queue
                //dequeue node from queue and push the value of node into variable that stores nodes
                //if there is a left property on node dequeued, add it to queue
                //if there is a right property on node dequeued, add it to queue

    //Depth-First Search (DFS)
        //Traverses down the tree before going to siblings
            //DFS PRE_ORDER
                //Recursive solution
                //