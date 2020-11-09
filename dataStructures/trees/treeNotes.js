//TREES

    //Trees are data structures that consist of nodes in a parent/child relationship
    //Lists are linear, Trees are non-linear, with multiple paths
        //Singly linked lists are like a special case of a tree
            //But if you add other branches, no longer a tree
    //Tree nodes can only point from parent to child, not from sibling to sibling (that's a graph)
    //Trees also have just ONE root entry point.
        //Root is top node in a tree
        //Child is a node directly connected to another node when moving away from the root
        //Parent is the converse of child
        //Siblings are groups of nodes with the same parent
        //Leaf is a node with no children
        //Edge is the connection between one node to another
    
    //Trees are common! They are seen:
        //HTML: The DOM. HTML elements on the DOM are structured in a tree
        //Network Routing: Network delivery schemes (broadcast, multicast, etc)
        //Abstract Syntax Trees: The structure of languages (while loop, parent of conditional, etc)
        //Artificial Intelligence: structuring decisions, etc
        //Folders in OS: You have folders with files in them, and other folders, like on your Mac, etc
        //JSON: Can be represented in tree structure
        
    //Binary Trees
        //Each node can have at most two children. Either zero, one or two children per node.
        //If there are more than three children it is not a binary tree.

        //Binary Search Trees
            //Like Binary Trees except they are also sorted in a specific way.
                //Every node to left of parent is always less than the parent
                //Every node to right of parent isd always greater than the parent
            //These are used because it is easy to search for elements
                //It's fast because like binary search, each iteration cuts possible elements in half (more or less)
            //Big O of Binary Search Trees
                //Insertion - O(log n)
                //Searching - O(log n)
                    //Both are best and average, but not guaranteed
                        //If you double number of nodes, you only increase by 1 step
                        //Like Binary Search, it cuts things in half
                        //Not guaranteed because some configurations that resemble linked lists are slow and one-sided
        