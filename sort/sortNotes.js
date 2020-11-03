//SORTING ALGORITHMS

    //Built-in Search in JavaScript
        //It doesn't always work as you expect if you don't pass anything in.
        //Strings will be sorted alphabetically, BUT numbers will be sorted by unicode code points
        //Built-in sort method accepts optional comparator function.
        //You can use this function to tell JS how you want to sort.
        //The comparator looks at pairs of elements (a and b), determines their sort order based on return value
            //If it returns a negative number, a comes before b
            //If it returns a postive number, a should come after b
            //If it returns 0, a and b will be considered the same as far as sort is concerned

    
    //General Notes
        //Elementary Algos work well on small data sets (20 items), but don't scale well when data gets larger (10,000 items)
        //Intermediate Algos work well for big data sets.
        //Intermediate Algos improve sort time from O(n) to O(n log n)
        

//QUADRATIC OR ELEMENTARY ALGORITHMS
    //BUBBLE SORT
        //Sorting algorthim where the largest values "bubble" to the top
        //To do this, you swap values one by one
        //Big O
            //Usually O(n2)
            //With optmized, best case is O(n)
        //Bubble sort only really makes sense if you know data is mostly sorted already
    
    //SELECTION SORT
        //Similar to bubble sort, but you place small values into a sorted position first instead of large ones
        //it finds smallest value, swaps it to the front, and the moves onto next item
        //Big O
            //Usually O(n2)
            //Not terribly efficient, you have to nest a loop.
        //Selection sort is better than bubble sort only if you want to minimize amount of swaps for some reason
            //Not common, but if you had some strange memory concerns

    //INSERTION SORT
        //Builds up sort, by gradually creating larger half which is always sorted
        //Inserts each element in proper place in sorted half
         //Big O
            //Usually O(n2)
            //If data is nearly sorted, insertion sort works well.
        //If you need to input a number instantly, insertion sort works well because you can do so easily and place it in the array.

    //All elementary algos have space complexity of O(1)
    //Sorting is fundamental
    //Bubble Sort, Selection Sort and Insertion Sort are roughly equivalent
    //Average time complexities are quadratic
        //We can do better ;)


//CRAZIER OR INTERMEDIATE SORTING ALGORITHMS 
    //MERGE SORT
        //Sorts by breaking splitting items into arrays of 1 or 0 since those are automatically sorted.
        //Then it joins items into new arrays merging them together
        //Big O
            //Always O(n log n)
            //No matter the data, it does everything the exact same way
                //It's n log n, because it's logarithmic, since it needs to split and recombined.
                    //Each split and join is a division/multiplication by 2. A logarithm
        //This keeps track of decomposition and recomposition 

    //QUICK SORT
        //Similar to Merge sort, we'll break down arrays into 1 or 0 since those are sorted
        //But then, we select one element called the "pivot" and find the index where the pivot should end up in a sorted array
        //Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
            //Runtime of quick sort changes depending on what pivot point is
            //For best result choose a medium value, for simplicity, you can choose the 1st element
            //Big O - Time Complexity
                //Best/Average case - O(n log n)
                //Worst - O(n2)
                    //If we take first element as pivot, and array is already sorted, we have to loop through full array
                        //You could also be unlucky by choosing minimum or maximum which would cause quadratic time            
                //Space Complexity
                    //O(log n)
            