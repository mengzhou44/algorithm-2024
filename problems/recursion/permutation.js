function  permutate(str){
    if (str.length ===1 )  return [str]
     let result = [] 
     for(let i=0; i<str.length; i++) {
         let remaining = str.slice(0,i) + str.slice(i+1)
        
         const temp = permutate(remaining) 
        
         for(let  item of temp) {
             result.push(str[i]+ item)
         }
     }

     return result 
}

 // dfs 
function permute(str) {
    let result = []
    function dfs(cur, used) {
      if (cur.length === str.length) {
        result.push(cur)
        return
      }
      
      for (let ch of str) {
        if(!used[ch]) {
          used[ch] = true
          dfs(cur + ch, used)
          used[ch] = false
        }
       
      }
    }
    const used = new Array(str.length).fill(false)
    dfs('', used)
    return result
  }
 

console.log(permutate('abc'))