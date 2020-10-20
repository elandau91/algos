const isSub = (str1, str2) => {
let arr1 = str1.split("")
let arr2 = str2.split("")
let result = ""

let i = 0
let j = 0


    while (i < arr1.length) {
        // console.log(arr1)
        // console.log(arr2)
        if (arr1[i] === arr2[j]) {
            result = result.concat(arr2[j])
            i++
            j++
        } else if (j === arr2.length) {
            i++
        } else {
            j++
        }
        
    }
    
    return result === str1 ? true : false
}

console.log(isSub("hello", "hello world")) //true
console.log(isSub("sing", "sting"))
console.log(isSub("abc", "abracadabra"))
console.log(isSub("abc", "acb"))