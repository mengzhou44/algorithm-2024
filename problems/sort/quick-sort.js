function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let pivot = arr[0]

  let smaller = []
  let greater = []
  let equal = []

  for (let val of arr) {
    if (val < pivot) {
      smaller.push(val)
    } else if (val === pivot) {
      equal.push(val)
    } else {
      greater.push(val)
    }
  }

  return [...quickSort(smaller), ...equal, ...quickSort(greater)]
}
 

const arr= [4,1, 3, 9, 12, 7]

console.log(quickSort(arr))
