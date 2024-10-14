function findTwoSum(arr, sum){
    let map = {} 

     for(let item of arr) {
         if (map[sum-item]!== undefined) {
            return [item, sum-item]
         }   
         map[sum-item] = true
     }

     return [] 
}