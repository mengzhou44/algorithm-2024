function isValid(input) {
     let stack =[] 

     const map = {
        ')': '(',
        '}': '{',
        ']': '['
      }

     for(let s of input) {
         if (s === '('|| s === '['|| s === '{') {
             stack.push(s)
         }else {
             if (stack.length === 0)  return false 
             const t= stack.pop()
             if (t!== map[s]) return false 
         }
     }

     return (stack.length === 0)

}

console.log(isValid("[({})]"))