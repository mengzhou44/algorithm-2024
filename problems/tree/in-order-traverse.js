class TreeNode {
     constructor(val) {
         this.val = val
         this.left = null
         this.right = null 
     }
}


function inOrderTraverse(root) {

    let result = [] 
    
    function traverse(node) {
        if (node === null)  return 
        traverse(node.left)
        result.push(node.val)
        traverse(node.right)
    }

    traverse(root)
    return  result 
   
}


const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inOrderTraverse(root))