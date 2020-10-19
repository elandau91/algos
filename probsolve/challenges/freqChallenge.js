const sameFrequencyOf = (num1, num2) => {
    let arr1 = num1.toString().split("")
    let arr2 = num2.toString().split("")

    if (arr1.length !== arr2.length) return false;
    
    let freq1 = {}
    let freq2 = {}
    
    for (let digit of arr1) {
        if (freq1[digit]) {
            freq1[digit] += 1
        } else {
            freq1[digit] = 1
        }
    }

    for (let digit of arr2) {
        if (freq2[digit]) {
            freq2[digit] += 1
        } else {
            freq2[digit] = 1
        }
    }

    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false
        }
    }
    return true
}

console.log(sameFrequencyOf(3555, 5535))
console.log(sameFrequencyOf(3534, 5535))