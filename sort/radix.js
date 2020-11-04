function getDigit(num, place){
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

}

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]))
    }
    return max
}

function radixSort(arr){
    let maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k)
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    } 
    return arr
}

console.log(radixSort([2,546,68,346346,34,33,344]))
