//Hash Tables (also known as Hash Map)

    //What is a Hash Table?
        //Hash Tables are used to store key/value pairs
        //They are like arrays but the keys are not ordered
        //They are fast! for finding, removing, searching
    //All languages use them
        //If data doesn't need on order, hash maps are preferrable
        //Python has dictionaries
        //JS has objects and maps
        //Java, Go, & Scala have Maps
        //Ruby has Hashes
    
    //This section is focused on building hashes, or objects in JS
        //Hashes help with human readibility (using keys over indexes)
        //We therefore need a way to convert keys to indices (for computer readability)
        //This is done with Hash Functions
    

    //HASH FUNCTIONS
        //A function that takes data of arbitrary size, and outputs data of a fixed size
        //What makes a good hash? (not a cryptographically secure one)
            //Fast (constant time)
            //Distributes indices uniformly
            //Want it to be deterministic (same input will always get you same output)
        
        //Handling Collisions
            //Seperate Chaining
                //Store collided things in same index, but in nested array
            //Linear Probing
                //We store one piece of data in one position, and move collided element to next empty spot

        
