function cityGrid(bigArr){

    let topRow = []
    let topCol = []
    let output = 0
    

    for (let i = 0; i < bigArr.length; i++) {
        let tempRow = 0
        let j = 0
        while (j < bigArr.length) {


            if (bigArr[i][j] > tempRow) {
                tempRow = bigArr[i][j]
                j++
            } else {
                j++
            }
        }
        topRow.push(tempRow)
    }

    for (let j = 0; j < bigArr.length; j++) {
        let tempCol = 0
        let i = 0
        while (i < bigArr.length) {

            if (bigArr[i][j] > tempCol) {
                tempCol = bigArr[i][j]
                i++
            } else {
                i++
            }
        }
        topCol.push(tempCol)
    }


    for (let i = 0; i < bigArr.length; i++) {
        let j = 0

        while (j < bigArr.length) {

            if (topRow[i] > topCol[i]) {
                output += topCol[i] - bigArr[i][j]
                j++
            } else {
                output += topRow[i] - bigArr[i][j]
                    j++
            }
        }
        
    }


    return output

}

console.log(cityGrid([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))

let bigly = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
//console.log(bigly[0])

// Example:
// Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
// Output: 35
// Explanation: 
// The grid is:
// [ [3, 0, 8, 4], 
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]

// The skyline viewed from top or bottom is: [9, 4, 8, 7]
// The skyline viewed from left or right is: [8, 7, 9, 3]

// The grid after increasing the height of buildings without affecting skylines is:

// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]