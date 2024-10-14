function binarySearch(arr,target) {
    let left = 0 
    let right = arr.length -1 

    while (left<=right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid 

        if (arr[mid] > target)  {
             right = mid-1 
        } else {
             left = mid+1
        }
    }
     
    return -1 
   
} 

let arr= [1, 2, 7, 18, 20, 23]

console.log(binarySearch(arr, 23))