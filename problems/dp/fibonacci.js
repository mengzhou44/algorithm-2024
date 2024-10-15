// function fibonacci(n) {
//      if (n <=1)  return n 

//       return fibonacci(n-1) +  fibonacci(n-2)

// }


function fibonacci(n) {
    if (n <=1)  return n 
    let dp = new Array(n+1).fill(0)
    dp[0] = 0 
    dp[1] = 1 

    for(let i=2;i<=n; i++) {
         dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n] 

}
 
console.log(fibonacci(6))

 console.log(fibonacci(4))