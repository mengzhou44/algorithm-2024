// function moveZeros(arr) {
//     if (arr.length <2)  return arr 

//     let val = arr.shift()

//     if (val === 0)  return [...moveZeros(arr), val]

//     return [val, ...moveZeros(arr)]
// }

function moveZeros(arr) {
    let current = 0 

    for(let i=0; i<arr.length; i++) {
        if (arr[i] !== 0 ) {
           arr[current] =arr[i] 
           current++ 
        }
    }
    for(let j = current; j<arr.length; j++) {
         arr[j] = 0 
    }

    return arr
}


let arr= [1,0, 2, 0, 4, 0]

console.log(moveZeros(arr))