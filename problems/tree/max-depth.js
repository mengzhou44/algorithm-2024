class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null 
    }
}


function maxDepth(root) {
     if (root == null)  return 0 

     return 1 +  Math.max(maxDepth(root.left), maxDepth(root.right))
}


const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(maxDepth(root))