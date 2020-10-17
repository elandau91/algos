
const uniqPointers = (arr) => {
    let left = 0
    let right = 1
    let freq = 0
    
    while (left < arr.length) {
        if (arr[left] !== arr[right]) {
            freq += 1
            left++
            right++
        } else {
            left++
            right++
        }
    }
   return freq 
}

a1 = [1,1,1,1,1,2]
a2 = [1,2,3,4,4,4,7,7,12,12,13]
a3 = []
a4 = [-2,-1,-1,0,1]

console.log(uniqPointers(a1))
console.log(uniqPointers(a2))
console.log(uniqPointers(a3))
console.log(uniqPointers(a4))

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])