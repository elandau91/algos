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


function coltVersion(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }


  function coltRecursive(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return coltRecursive(str1.slice(1), str2.slice(1))  
    return coltRecursive(str1, str2.slice(1))
  }