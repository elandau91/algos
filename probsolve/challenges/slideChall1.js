const maxSubarraySum = (arr, size) => {
if (size > arr.length) return null;

let i = 0
let j = size - 1

let max = 0

    while (i <= j) {
        max += arr[i]
        i++
    }
i = 0
j = size

let temp = max

    while (j < arr.length) {
        temp = (temp - arr[i]) + arr[j]

        if (temp > max) {
            max = temp
            i++
            j++
        } else {
            i++
            j++
        }
    }

    return max

}

console.log(maxSubarraySum([100,200,300,400], 2))
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2))
console.log(maxSubarraySum([2,3], 3))

function coltsWay(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}