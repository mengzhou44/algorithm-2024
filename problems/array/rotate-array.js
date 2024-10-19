function  rotateArray(arr, steps) {
     let len = arr.length; 
     
     steps = steps % len 

     return arr.slice(-steps).concat(arr.slice(0, len-steps))

}


const arr = [1,2,3,4,5,6,7]
const steps = 3
const rotatedArray = rotateArray(arr, steps);
console.log(rotatedArray); // Output: [5, 6, 7, 1, 2, 3, 4]