//My shot
function binarySearch(arr, value) {
    let left = 0
    let right = arr.length - 1
    let middle = Math.ceil(right / 2)
    //console.log(middle)

        while (left < right) {
            //console.log(left, right)
            if (value === arr[middle]) {
                return middle
            } else if (value > arr[middle]) {
                left = middle
                middle = Math.ceil((left + right) / 2)
            } else {
                right = middle 
                middle = Math.ceil((left + right) / 2)
            }
        }
    
    return -1
}

// COLT OG
function coltSearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// COLT REFACTORED
function coltRefactorSearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)



console.log(binarySearch([1,2,3,4,5], 2))
console.log(binarySearch([5,6,10,13,14,18,30,34,,35,37,40,44,64,79,84,86,95,96,98,99], 30))