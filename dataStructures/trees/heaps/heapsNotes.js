//HEAPS

    //Binary Heaps
        //Very similar to Binary Search Tree but it has different rules
        //In a MaxBinaryHeap parent nodes are always larger than child nodes
        //In a MinBinaryHeap parent nodes are always smaller than child nodes
            //No order, but top to bottom differences
        //No guarantees between sibling in either case
        //Binary heaps are compact as possible, so every left and right is filled before moving down
    //Binary Heaps are used to implement priority queues, which are very common data structures
    //Binary Heaps are also used with Graph Traversal

    //Easy way build binary heaps with array
        //Finding Children: take index, multiple by 2, add 1 and 2 to get respective children of that index.
        //Find Parent: Subtract 1, divide by 2, and Math.floor to get right index
        //Procudure for insert
            //Insert element and bubble up accordingly
        //Procude for removal
            //Take from root
            //Replace root with lowest value
            //Then you "sink down" accordingly (opposite of bubble up)
        