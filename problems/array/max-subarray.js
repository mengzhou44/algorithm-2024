function maxSubArray(arr) {
    if (arr.length === 1)  return arr[0] 
    let maxSum = arr[0] 
    let currentSum = arr[0] 

    for(let i =1; i<arr.length; i++) {
         currentSum = Math.max(arr[i], arr[i]+ currentSum)
         maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(arr))