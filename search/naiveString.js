//My Solution - O(n)
function naiveString(bigStr, lilStr){
let result = 0
let j = 0

    for (let i in bigStr) {
        
        let char = bigStr[i]
        if (char === lilStr[j]) {
            if (j === lilStr.length - 1) {
                result += 1
                j = 0
            } 
            
            else {
                j++
            }
        }  
        else if (char === lilStr[0]) {
            j = 1
        }
        else {
            j = 0
        }
       
    }
    return result
}

console.log(naiveString("wowomgzomg", "omg"))
console.log(naiveString("wowomgzomgzomg", "omg"))
console.log(naiveString("lorie loled", "lol"))
console.log(naiveString("lorie llollled", "lll"))


//Colt's Solution = O(n)2 
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

//naiveSearch("lorie loled", "lol")
