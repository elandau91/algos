const anagrams = (str1, str2) => {
    let arr1 = str1.split("")
    .sort((a,b) => {
        if (a < b)
            return -1;
        if ( a > b)
            return 1;
        return 0;})

    let arr2 = str2.split("")
    .sort((a,b) => {
        if (a < b)
            return -1;
        if ( a > b)
            return 1;
        return 0;})
    str1 = arr1.join("")
    str2 = arr2.join("")

    if (str1 === str2) {
        return true
    } else {
        return false
    }
}

console.log(anagrams("hello", "olehl"))

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }