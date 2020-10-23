//RECURSION

//What is recursion?
    //A process (in our case a function), that calls itself

//Why is it important?
    //It's everywhere!
    //JSON.parse or JSON.stringify are often recursive
    //document.getElementById or DOM traversal algorithms can be recursive
    //Object traversal can be recursive
    //It can be found in many complex data structures
    //It can sometimes be easier than iteration


//CALL STACK
    //In all languags there is a built in data structure that manages what happens when functions are invoked
    //In JavaScript this is called the Call Stack
    //It's a stack data structure
    //Anytime a function is called/invoked, it is placed on top of call stack
    //When JS sees the return keyword or when the function ends the compiler will remove (pop) from the top
    //Normal functions are called, pushed on the callstack, completed, pushed off the call stack
    //Recursive functions keep pushing new functions onto call stack

//How Recursive Functions Work
    //Invoke the same function, with a different input until you reach the base case

    //BASE CASE
        //The condition met that stops the recursion.
        //Most important concept

    //TWO ESSENTIALS
        //Base Case (when recursion stops)
        //Different Input


//Where Recursion goes wrong
    //No Base Case
    //Returning wrong value, or forgetting to return!
    //Stack overflow! if recursion does not stop