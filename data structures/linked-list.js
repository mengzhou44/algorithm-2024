class ListNode {
    constructor(value) {
         this.value = value
         this.next = null 
    }
}

class LinkedList {
     
   constructor() {
     this.head = null
   }

   add(node) {
      if (this.head === null) {
          this.head = node
      }else{
         let current = this.head
         while(current.next!== null) {
             current = current.next
         }
         current.next = node
      }
   }

   print() {
     let current = this.head 
     while(current!== null) {
         console.log(current.value)
         current= current.next
     }
   }
}

const list = new LinkedList()
list.add(new ListNode(1))
list.add(new ListNode(2))

list.print()