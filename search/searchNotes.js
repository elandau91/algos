
//Linear Search
    //Given an array, simplest way to search is to look at every element in order and see
    //if it's what we want.
    //If array is unsorted, this is a good solution.
    //JS has a lot of methods to help with this:
        //indexOF
        //includes
        //find
        //findIndex
            //Every method here checks each item in array, one by one
    //BIG O for Linear Search
        //Best case O(1) - rare, just if you get lucky
        //Average case O(n) - see below, general trend is as n grows, time grows on average
        //Worst case O(n) - more likely since you need to go through whole array often
    //Best we can do with unsorted data


//Binary Search
    //Only works on sorted arrays
    //Can be much faster than Linear Search
    //Eliminates half of remaining elements at the time with each iteration, instead of one at a time
    //DIVIDE AND CONQUER
        //Choose element in the middle and determine whether searched number is less than or greater than
        //Keep repeating this pattern until you get solution
        //Create two pointers (left and right) for array and change values as you progess with a middle value
    //BIG O for Binary Search
        //Best case O(1) - you get lucky, get it right away
        //Averagee case O(log n) - incredibly good! the size of the ray logged is how many tries it will take max
        //Worst Case O(log n) - for example, if there are 32 elements, the max is 2 * 2 * 2 * 2, only 4 tries ;)
    //Can only use with sorted data


//Naive String Search
    //Finding substrings within a larger string
    //Outer loop for big string, inner loop for smaller string


//KNP COMING SOON