function knapsack(weights, values, W) {
  let n = weights.length
  let dp = new Array(n + 1).fill(null).map((row) => new Array(W + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (w >= weights[i-1]) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i-1]] + values[i-1])
      } else {
        dp[i][w] = dp[i - 1][w]
      }
    }
  }

  return dp[n][W]
}


let weights = [1, 3, 4, 5];
let values = [1, 4, 5, 7];
let W = 8;

console.log(knapsack(weights, values, W)); 