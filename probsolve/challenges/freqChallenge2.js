const duplicates = (...args) => {
    let collection = {}

    for (let char of args) {
        if (collection[char]) {
            collection[char] +=1
        } else {
            collection[char] = 1
        } 
    }
    
    for (let key in collection) {
        if (collection[key] > 1) {
            return true
        }
    }
    return false
}



console.log(duplicates(1,2,3,5,6,7,8,9))
console.log(duplicates(1,2,2))
console.log(duplicates("a", "b", "c", "a"))