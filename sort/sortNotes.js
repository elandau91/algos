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

