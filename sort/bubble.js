
//unoptimized version
function bubbleSort(arr){

    for (let i = arr.length; i > 0; i-- ) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}


let arr1 = [10, 4, 17, 3, 9]

//console.log(bubbleSort(arr1))


//optimized version
function bubbleSortOpt(arr){
    let noSwaps

    for (let i = arr.length; i > 0; i-- ) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
              noswaps = false
            }
        }
        if (noSwaps) break;
    }
    return arr
}

let arr2 = [10, 4, 7, 17, 23, 29]

console.log(bubbleSortOpt(arr2))