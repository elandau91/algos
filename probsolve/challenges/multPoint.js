const avgPair = (array, avg) => {
    if (array.length < 2) return false;

    let j = array.length - 1
    let i = 0
    
    while (i < array.length - 1) {
        let res = (array[i] + array[j]) / 2
        //console.log(res)
        if (res === avg) {
            return true
        } 
        else if (res < avg) {
            i++
        } 
        else {
            j--
        }     
    } 
    return false
}



console.log(avgPair([1,2,3], 2.5))
console.log(avgPair([1,3,3,5,6,7,10,12,19], 8))
console.log(avgPair([-1,0,3,4,5,6], 4.1))
console.log(avgPair([], 4))