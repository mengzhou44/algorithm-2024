function trapRainWater(heights) {
  let n = heights.length
  if (n < 3) return 0

  let topWater = 0

  let leftMax = new Array(n).fill(0)
  let rightMax = new Array(n).fill(0)

  leftMax[0] = heights[0]
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], heights[i])
  }

  rightMax[n - 1] = heights[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], heights[i])
  }

  for (let i = 0; i < n; i++) {
    topWater += Math.min(leftMax[i], rightMax[i]) - heights[i]
  }

  return topWater
}

console.log(trapRainWater([4, 3, 4])) // Output: 1
console.log(trapRainWater([4, 3, 4, 2])) // Output: 1
console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // Output: 6
console.log(trapRainWater([4, 3])) // Output: 0 (less than 3 bars)
console.log(trapRainWater([4])) // Output: 0 (less than 3 bars)
