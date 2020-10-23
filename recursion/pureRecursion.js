//Pure Recursion
    //The function itself is self-contained and recursive

    //For arrays, methods like slice, the spread operator and concat make copies of arrays so you do not mutate them
    //String are immutable so you will need to use methods like slice, substr or substring to make copies
    //Objects will need Object.assign or the spread operator to make copies


    function collectOddValues(arr){
        let newArr = [];
        
        if(arr.length === 0) {
            return newArr;
        }
            
        if(arr[0] % 2 !== 0){
            newArr.push(arr[0]);
        }
            
        newArr = newArr.concat(collectOddValues(arr.slice(1)));
        return newArr;
    }
    
    collectOddValues([1,2,3,4,5])
                                     