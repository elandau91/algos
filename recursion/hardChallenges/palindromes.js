function isPalindrome(str){

    if (str.length === 1 || str === undefined) {    
        return true;
    }

    else if (str[0] === str[str.length - 1]) {
        let newS = str.slice(0,-1).slice(1)
        return isPalindrome(newS)
    } 

    else {       
        return false
    }

}

console.log(isPalindrome('tacocat'))
console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemoniua'))

// let s = 'a'

// console.log(s.length)

// console.log(s.slice(0,-1))
// console.log(s.slice(1))