function reverse(str){
    if (str.length === 0) return '';
    //console.log(newS)
    return str.slice(-1) + reverse(str.slice(0,-1))
}

console.log(reverse('awesome'))
console.log(reverse('rithmschool'))
