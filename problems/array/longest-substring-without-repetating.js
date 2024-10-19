function longestSubstringWithoutRepeating(str) {
     if (str.length === 1)  return 1 
     let start = 0 
     let max =  0 
     let seen = {}
 
    for(let end = 0; end<str.length; end++) {
         if (seen[str[end]]!== undefined) {
            start = Math.max(start, seen[str[end]]+1)
         }
         seen[str[end]] = end
         max = Math.max(max, end-start+1)
    }

    return max 
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); 
console.log(longestSubstringWithoutRepeating("")); 