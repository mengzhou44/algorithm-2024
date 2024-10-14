class ListNode {
    constructor(val) {
        this.val = val 
        this.next = null
    }

    print() {
        let result = [this.val]
        let nextNode = this.next 
        while(nextNode!==null) {
            result.push(nextNode.val)
            nextNode = nextNode.next 
        }

        console.log(result)
    }
}

function reverse(head) {
     if (head === null)  return null

     let prev= null 
     let current = head 
     let next = null 

     while(current!==null) {
         next = current.next 
         current.next = prev
         prev = current 
         current = next
     }

     return prev 
}

let root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)

 root.print()

 let reversed = reverse(root)

 reversed.print()