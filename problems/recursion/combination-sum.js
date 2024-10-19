function combinationSum(candidates, target) {
    let result = [];

    function backtrack(remaining, combination, start) {
          if (remaining === 0) {
              result.push([...combination])
              return 
          }
        
          for(let i = start; i<candidates.length; i++) {
              if (remaining >= candidates[i]){
                 combination.push(candidates[i])
                 backtrack(remaining-candidates[i], combination, i)
                 combination.pop()
              }
          }

    }

    backtrack(target,[], 0)
    
    return result 
}

console.log(combinationSum([2, 3, 6, 7], 7));