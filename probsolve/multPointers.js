const sumZero = (arr) => {
    for (let char of arr) {
        let result = arr.find(num => char + num === 0 )
        if (result) {
            return true
        }
    }
    return undefined
}

let a1 = [-3, -2, -1, 0, 1, 2, 3]
let a2 = [-2, 0, 1, 3]
let a3 = [1, 2, 3]
let a4 = [-4, -3, -2, -1, 0, 1, 2, 5]

// console.log(sumZero(a1))
// console.log(sumZero(a3))
// console.log(sumZero(a2))

const refactoredSumZero = (arr) => {
    let j = arr.length - 1

    for (let char of arr){
        if(char + arr[j] === 0) {
            return true
        } else if (char + arr[j] > 0) {
            j -= 1
        } 
    }
}

console.log(refactoredSumZero(a1))
console.log(refactoredSumZero(a3))
console.log(refactoredSumZero(a4))

const coltsWay = (arr) => {
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}