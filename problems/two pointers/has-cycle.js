class ListNode {
     constructor(val) {
         this.val = val 
         this.next = null
     }
}


function hasCycle(head) {
  if (!head || !head.next) return false

  let slow = head
  let fast = head.next

  while (slow !== fast) {
    if (fast == null || fast.next === null) return false
    slow = slow.next
    fast = fast.next.next
  }

  return true
}

let root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next= root.next

console.log(hasCycle(root))
