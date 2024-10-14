
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null 
    }
}


function isBalanced(root) {

    function checkHeight(node) {
         if (node == null)  return 0 
         
         let height1 = checkHeight(node.left)
         let height2 =  checkHeight(node.right)

         if (height1=== -1 ||  height2 === -1 || Math.abs(height1- height2) >1) return -1 

         return 1+ Math.max(height1, height2)
    }

    return  checkHeight(root) !== -1 
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(6);

console.log(isBalanced(root));