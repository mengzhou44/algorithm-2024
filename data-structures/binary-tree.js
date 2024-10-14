function TreeNode(value) {
  this.value = value
  this.left = null
  this.right = null
}

function BinaryTree() {
  this.root = null
}

BinaryTree.prototype.insert = function (value) {
  if (this.root === null) {
    this.root = new TreeNode(value)
  } else {
    this.insertNode(this.root, new TreeNode(value))
  }
}

BinaryTree.prototype.insertNode = function (node, newNode) {
  if (newNode.value < node.value) {
    if (node.left === null) {
      node.left = newNode
    } else {
      this.insertNode(node.left, newNode)
    }
  } else {
    if (node.right === null) {
      node.right = newNode
    } else {
      this.insertNode(node.right, newNode)
    }
  }
}

BinaryTree.prototype.inOrder = function (node, result=[]) {
  if (node !== null) {
    this.inOrder(node.left, result)
    result.push(node.value)
    this.inOrder(node.right,result)
  }
  return result
}

BinaryTree.prototype.preOrder = function (node, result=[]) {
  if (node !== null) {
    result.push(node.value)
    this.preOrder(node.left,result)
    this.preOrder(node.right,result)
  }
  return result
}

BinaryTree.prototype.postOrder = function (node, result=[]) {
  if (node !== null) {
    this.postOrder(node.left, result)
    this.postOrder(node.right,result)
    result.push(node.value)
  }

  return result 
}


const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log(tree.inOrder(tree.root).join(','))
console.log(tree.preOrder(tree.root).join(','))
console.log(tree.postOrder(tree.root).join(','))
 