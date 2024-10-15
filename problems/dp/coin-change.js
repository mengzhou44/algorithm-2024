function coinChange(coins, amount) {
     if (amount === 0)  return 0 
  
     let dp  =new Array(amount+1).fill(Infinity)
     
     for(let coin of coins) {
         dp[coin] =1 
     }

     for (let i=1; i<=amount; i++) {
         for(let coin of coins) {
             if (i>= coin) {
                 dp[i] = Math.min(dp[i],  dp[i-coin] + 1)
             }
         } 
     }

     return dp[amount] === Infinity? -1 : dp[amount]
}


console.log(coinChange([1, 2, 5], 11))