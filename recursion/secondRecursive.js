function sumRange(num){
    if(num === 1) return 1; 
    return num + sumRange(num-1);
 }

 let thing = 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3+ 2+1
 
console.log(thing)
//console.log(sumRange(4))
console.log(sumRange(10))
//console.log(sumRange(3))