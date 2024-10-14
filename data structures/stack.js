class Stack {
   constructor() {
     this.arr=[]
   }

   push(value) {
     this.arr.push(value)
   }

   pop() {
     if (this.arr.length>0) {
         this.arr.pop()
     }
   }

   print() {
     for(let val of this.arr) {
        console.log(val)
     }
   }

}

const stack =new Stack() 

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop() 

stack.print() 