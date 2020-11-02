//DATA STRUCTURES

    //Singly Linked Lists
        //A data structure that contains a head, tail and length
        //Linked lists consists of nodes, each node has a value and pointer to another node or null
        //They don't have indexes!
        //Connected via nodes with a next pointer
        //Random access is not allowed! If you want 10th item, you have to traverse one by one to get to 10.
        //BUT insertion and deletion are better with linked lists!
            //You don't need to worry about the time/space of re-assigning indexes
        //BIG O of singly linked lists
            //insertion - O(1)
            //Removal - O(1) OR O(n)
            //Searching - O(n)
            //Access - O(n)
        //Single Linked Lists are an excellent alternative to arrays when insertion and deletion is frequently required at beginning of data structure
        //Arrays are good at removing from the end, and have built in index whereas Linked Lists do not
        //The idea of list data structures that consists of nodes is the foundation for other data structures like Stacks & Queues

    
    //Doubly Linked Lists
        //Almost identical to singly linked lists, except every node has an additional pointer, to the previous node
        //It makes certain operations much simpler, because you have an additional pointer for previous
        //It does however require more memory. More memory === more flexibility
        //Big O of Doubly Linked Lists
            //Insertion - O(1)
            //Removal - O(1)
            //Searching - O(n) (technically searching is O(n/2), but that's still O(n))
            //Access - O(n)
        //