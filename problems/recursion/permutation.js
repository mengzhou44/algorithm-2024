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

 

console.log(permutate('abc'))