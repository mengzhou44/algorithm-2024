class CircularQueue {
    constructor(capacity) {
       this.front = 0 
       this.rear = 0 
       this.capacity = capacity  
       this.arr= new Array(capacity).fill(null)
    }

    isFull() {
       return this.arr.every(item=> item!==null)
    }

 
    isEmpty () {
     return this.arr.every(item=> item===null)
    }


    enqueue(value) {
         if (this.isFull()) {
             console.log('Queue is full!')
             return 
         }
         this.arr[this.rear]= value
         this.rear = (this.rear+1 ) % this.capacity  
         
    }


    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty')
            return 
        }
        let value = this.arr[this.front]
        this.arr[this.front]=null
        this.front= (this.front+1 ) % this.capacity
        
        return value
   }

   display() {
       if(this.isEmpty()) {
          console.log("queue is empty!")
          return 
       } 
       let result = [] 
       if(this.front< this.rear) {
          for(let i = this.front; i<this.rear; i++) {
              result.push(this.arr[i])
          }
       } else{
            for(let i = this.front; i<this.capacity; i++) {
                result.push(this.arr[i])
            }
            for(let i = 0; i<this.rear; i++) {
                result.push(this.arr[i])
            }
       }
      
       console.log(result.join(','))
   }
}

const cq = new CircularQueue(3);

cq.enqueue(1); // Enqueue 1
cq.enqueue(2); // Enqueue 2
cq.enqueue(3); // Enqueue 3
cq.display();  // Output: 1,2,3

cq.dequeue(); // Dequeue one element
cq.display();  // Output: 2,3

cq.enqueue(4); // Enqueue another element
cq.display();  // Output: 2,3,4

cq.enqueue(5);  // Try to enqueue when full, Output: Queue is full!

cq.dequeue(); // Dequeue one element and enqueue again
cq.enqueue(5); 
cq.display();  // Output: 3,4,5
 
 