function linearSearch(arr, value){ 
   return arr.indexOf(value)
}

//this is what indexOf or other linear search methods are doing :)
//BigO = On
function linearLoop(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}


let nums = [1, 2, 30, 15, 5, 97, 70, 68, 80]

console.log(linearSearch(nums, 30))
console.log(linearSearch(nums, 97))
console.log(linearSearch(nums, 55))