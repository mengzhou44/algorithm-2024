function binarySearch(sorted, target, left = 0, right = sorted.length - 1) {
  if (left > right) return false

  let mid = Math.floor((left + right) / 2)

  if (sorted[mid] === target) return true

  if (sorted[mid] > target) return binarySearch(sorted, target, left, mid-1)

  return binarySearch(sorted, target, mid + 1, right)
}

let sorted = [1, 5, 8, 9, 12, 15]

console.log(binarySearch(sorted, 10))
