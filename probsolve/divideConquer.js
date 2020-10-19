//linear search O(n)
const search = (arr, number) => {
let i = 0

    while (i < arr.length) {
        if (arr[i] === number ) {
            return i
        } else {
            i++
        }
    }
}

console.log(search([1,2,3,4,5,6], 4))
console.log(search([1,2,3,4,5,6], 6))
console.log(search([1,2,3,4,5,6], 11))

//do binary search IF array sorted
const binarySearch = (array, val) => {

    let min = 0
    let max = array.length

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle]

        if (array[middle] < val) {
            min = middle + 1
        } else if (array[middle] > val) {
            max = middle - 1
        } else {
            return middle
        }
    }

    return -1
}
