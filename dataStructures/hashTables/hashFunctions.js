//this only hashes strings
//Not constant time, linear (O(n)) becasue it scales with length of array input
//Could be more random (data is clustered)
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96
      total = (total + value) % arrayLen;
    }
    return total;
  }


//refined version
function hash(key, arrayLen) {
    let total = 0;
    //Prime number helps limit collisions
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }

console.log(hash("iknp", 10))