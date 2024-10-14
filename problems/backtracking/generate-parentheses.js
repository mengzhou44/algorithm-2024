function generateParentheses(n) {
     let result =[] 

     function backtrack(str, openCount, closeCount) {
          if (str.length === 2*n)  {
             result.push(str)
             return 
          }

          if (openCount<n)  {
             backtrack(str+"(", openCount+1, closeCount)
          }

          if(closeCount< openCount) {
            backtrack(str+")", openCount, closeCount+1)
          }
     }

     backtrack('', 0, 0 )

     return result
}


console.log(generateParentheses(3))