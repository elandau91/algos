function flatten(arrArr){
    let newArr = []

    function miniArr(bigArr){
        if (bigArr.length === 0) return;
        if (Array.isArray(bigArr[0]) === false) {
            newArr.push(bigArr[0])
            miniArr(bigArr.slice(1))
        } else {

            miniArr(bigArr.slice(1))
        }
    }

    miniArr(arrArr)

    return newArr
}

function coltsWay(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }

console.log(flatten([1, 2, 3, [4, 5] ]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
console.log(flatten([[1],[2],[3]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))