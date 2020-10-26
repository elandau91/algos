function capitalize(arr){
    let newArr = []

    function miniFunction(theArr) {
        if (theArr.length === 0) return;
        //console.log(theArr[0])
        newArr.push(theArr[0].charAt(0).toUpperCase() + theArr[0].slice(1))

        miniFunction(theArr.slice(1))
    }

    miniFunction(arr)

    return newArr
}

function capitalizeWords(arr){
    let newArr = []

    function miniFunction(theArr) {
        if (theArr.length === 0) return;
        //console.log(theArr[0])
        newArr.push(theArr[0].toUpperCase())

        miniFunction(theArr.slice(1))
    }

    miniFunction(arr)

    return newArr
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words))
//console.log(capitalize(['car','taco','banana']))

