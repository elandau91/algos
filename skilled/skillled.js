const names = ['tim', 'helen', 'tom', 'tammy', 'jason']
// find t names
// capitalize first letter
// sort the array

function sortNames(names, letter) {
	let arr = []

	for (let i =0; i < names.length; i++) {
		if (names[i].charAt(0) === letter) {
			//console.log(names[i])
			arr.push(letter.toUpperCase() + names[i].slice(1))
		}

	}

	

	return arr.sort()
}

//console.log(sortNames(names, "j"))

const state = { t1: { name: 'John' } }
const obj = { id: 't2', payload: { name: 'Tom' } }
// { t1: { name: 'John' }, t2: { name: 'Tom' } }
const obj2 = { ...state, [obj.id]: obj.payload }


//console.log(objManipulator(state, obj))

const t1 = { name: 'Tim' }
t1['age'] = 30
//console.log(t1)

// spread operator and bracket notation

// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
//   Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// O(n*n) = O(n^2)
// O(n)
function vowels(str) {
	let arr = str.split('')
	let newArr = []
	let count = 0

	let vowelObj = { a: true, e: true, i: true, o: true, u: true}

	for (let i = 0; i < arr.length; i++) {
		// vowelObj['a']
		if (vowelObj[arr[i]]) {
			count += 1
		} 
	}

	// for (let i = 0; i < arr.length; i++) {
	// 	// includes
	// 	if (vowelArr.includes(arr[i])) {
	// 		newArr.push(arr[i])
	// 	}
	// }
	return count
}

// console.log(vowels('Hi There!'))

// const t1 = { 1: '1', 2: '2' }
// const t2 = [1, 2, 3]

// O(1)
// t1['1']

/*
const a1 = new Name("joHN", "SMITH")
  Test.assertEquals(a1.fname, "John")
  Test.assertEquals(a1.lname, "Smith")
*/

class Name {

	constructor(fname, lname) {
		this.fname = fname.charAt(0).toUpperCase + fname.slice(1).toLowerCase(),
		this.lname = lname.charAt(0).toUpperCase + lname.slice(1).toLowerCase()
	}



}

// edabit.com