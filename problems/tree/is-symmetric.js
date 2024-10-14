class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null 
    }
}

function isSymmetric(root){
     if (root === null)  return true 

     function isMirror(left, right) {
         if (left === null && right === null) return true 
         if (left === null || right === null) return false 
         return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left)
     }

     return isMirror(root.left, root.right)
}