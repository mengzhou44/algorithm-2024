
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null 
    }
}


function serialize(root) {
      if (root === null)  return 'null' 

      return root.val +','+ serialize(root.left) +',' +   serialize(root.right)
  }
  
  function deserialize(data) {
    
      let values = data.split(',')
      
      function buildTree() {
         let data = values.shift()
         if (data === 'null') return null 
         let node = new TreeNode(parseInt(data))
         node.left = buildTree()
         node.right = buildTree()
         return node 
      }
      return buildTree()
  }
  
  // Example Usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);
  
  const serializedData = serialize(root);
  console.log(serializedData); // Output: 1,2,null,null,3,4,null,null,5,null,null
  
  const deserializedTree = deserialize(serializedData);
  console.log(deserializedTree); // Rebuilds the original tree