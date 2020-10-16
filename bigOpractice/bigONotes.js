//Big O
//  --counting operations
//  --counting assignments
//  --counting comparisons

//Time Complexity
    // -Constants don't matter for big O

    // Linear -> O(n)
    //     -as n scales runtime scales as well

    // Quadratic -> O(n)2
    //     -as n scales runtime squares

    // Constant -> O(1)
    //     -as n scales it doesn't affect runtime

//Constants
    //-Arithmetic operators are constants
    //-Variable assignments are constants
    //-Accessing Element with index or key are constants

    //-Loops can be quadratic if nested



//Space Complexity
    //-most primitives (booleans, numbers, undefined, null) are constant space
    //-strings require O(n) space where n is the string length
    //Arrays and Objects (reference types) require O(n) space

    //Logarithms are the inverse of exponenation

//Big O Space
    //Objects
        //Objects are fast and unordered
                //Insertion -> O(1)
                //Removal -> O(1)
                //Search -> O(n)
                //Access -> O(1)

    //Arrays
        //Arrays are slow and ordered
                //Insertion -> depends -> push O(1), shift O(n)
                //Removal -> depends -> push O(1), shift O(n)
                //Search -> O(n)
                //Access -> O(1)

    //Array Operators
        //Operators are varied
                //push -> O(1)
                //pop -> O(1)
                //shift -> O(n)
                //unshift -> O(n)
                //concat -> O(n)
                //sort -> O(n * log n)
                //map/filter/foreach -> O(n)
                
    