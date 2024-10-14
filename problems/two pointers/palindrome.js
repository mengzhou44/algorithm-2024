function palindrome(arr) {
    if (arr.length<2)  return true 

    let left = 0 
    let right = arr.length-1 

    while(left<right) {
         if (arr[left] !== arr[right]) return false 
         left++ 
         right--
    }

    return true 
}


const arr = [1,3,4,3,1,6 ]

console.log(palindrome(arr))