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
                //Create variable to store values of nodes visited
                //do recursive call with helper function to go through left and then right
            //DFS POST_ORDER
                //Recursive solution
                //Different order going up first
            //DFS IN_ORDER
                //recursive solution
                //a combination of the other two versions

    
    //When should you use what??
        //Time complexity is the same regardless, since we will always visit each node once
        //For space complexity, long/thin use breadth, wide and short use depth
        //BFS in general
            //If you have a tree that is very wide, fully fleshed out, depth first is better.
                //Reason is that we don't need to store a lot of nodes in queue with depth first which takes less space
            //Breadth first is better if tree has less children/width, because queue will stay small
        //DFS in general
            //Why use one over the other? Post/Pre/In?
                //IN ORDER - works very will with binary search trees, because you'll end up with sorted array
                //PRE ORDER - can be useful if you are trying to duplicate a tree, or flatten it into a file to create another tree later
                    //You know the root immediately this way
            //They are easy to switch around though, it's just changing one line of code.