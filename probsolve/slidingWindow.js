const maxSubArray = (arr, amount) => {
    let max = []
    let j = amount - 1
    let i = 0
    
        while (arr[i] <= arr[j]) {
            max.push(arr[i])
            i++
        }

    
        
  
}

function naiveMaxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }

  function coltsWay(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        //subtracts first amount from "array" and adds last amount, as opposed to looping entire array
      tempSum = tempSum - arr[i - num] + arr[i];
        //chooses which sum is largest
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  coltsWay([2,6,9,2,1,8,5,6,3],3)
  
