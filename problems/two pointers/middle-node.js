class ListNode {
    constructor(val) {
        this.val = val 
        this.next = null
    }
}

function middleNode(head) {

    if (head === null) return  null 

    let slow = head 
    let fast = head 

     while(fast!==null && fast.next!== null && fast.next.next!==null) {
         slow = slow.next 
         fast = fast.next.next
     }
    
     return slow

}


let root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(4)
// root.next.next.next.next = new ListNode(5)

console.log(middleNode(root).val)
