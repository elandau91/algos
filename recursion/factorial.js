//4! is a factorial
    //it means 4 * 3 * 2 * 1

//iterative example

function iterativeFactorial(num) {
    let total = 1
    while (num > 0) {
        total = num * total
        num--
    }
    return total
}


console.log(iterativeFactorial(10))
console.log(iterativeFactorial(6))


//recursive example

function recursiveFactorial(num) {
    if (num === 1) return 1;
    return num * recursiveFactorial(num - 1)
}

console.log(recursiveFactorial(10))
console.log(recursiveFactorial(6))