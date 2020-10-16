function same(arr1, arr2) {
    if (arr1.length === arr2.length) {
        let newArr = arr1.map(num => num * num).sort((a, b) => a - b)
        let newArr2 = arr2.sort((a, b) => a - b)
        
        if (newArr.every((val, index) => val === newArr2[index])) {
            return true
        } else {
            return false
        }
        
    } else {
        return false
    }
}

function sameRefactored(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

let a1 = [1, 2, 3]
let a2 = [4, 1, 9]
let a3 = [1, 2, 3]
let a4 = [1, 9]
let a5 = [1, 2, 1]
let a6 = [4, 4, 1]

console.log(same(a1, a2))
console.log(same(a3, a4))
console.log(same(a5, a6))