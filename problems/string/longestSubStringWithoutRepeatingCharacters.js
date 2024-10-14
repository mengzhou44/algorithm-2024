function longestSubstringWithoutRepeating(str) {
    if (str.length === 1)  return 1 

    let max=1 
    let current = str[0]
    for(let i=1; i<str.length ;i++) {
         if (!current.includes(str[i])) {
            current += str[i]
         }else{
            max= Math.max(max, current.length)
            const index = current.indexOf(str[i]);
            current =  current.slice(index+1) + str[i]
           
         }
    }

    return Math.max(max, current.length)
}