function quickSort(arr) {
    if (arr.length <2)  return arr 

    let pivot = arr[0]
    let less=[] 
    let equal=[]
    let greater= []

    for(item of arr) {
         if (item<pivot) {
             less.push(item)
         } else  if (item === pivot) {
            equal.push(item)
        }  else{
            greater.push(item)
        } 
    }

    return  [...quickSort(less), ...equal, ...quickSort(greater)]
}

let arr = [1, 4, 2, 9, 3]
console.log(quickSort(arr))
