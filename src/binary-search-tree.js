const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootVal = null;
  }

  root() {
    return this.rootVal;
  }

  add(value) {
    this.rootVal = insert(this.rootVal, value);

    function insert(node, value){
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = insert(node.left, value);
      }
      else {
        node.right = insert(node.right, value);
      }
      return node;
    }
  }



  has(data) {
    return searchInside(this.rootVal, data)

    function searchInside(node, data) {
      if (!node){
        return false;
      } 
      
      if (node.data === data) {
        return true;
      } 
      
      
      return data < node.data ?
      searchInside(node.left, data):
      searchInside(node.right, data)
      
    };

  }

  find(data) {
    return findData(this.rootVal, data)

    function findData(node, data) {
      if (node.data === data) {
        return node;
      }
      else if (data < node.data && node.left != null) {
        return findData(node.left, data)
      }
      else if (data > node.data && node.right != null) {
        return findData(node.right, data);
      }
      return null;
    }
  }

  remove(/* data */) {
    // remove line with error and write your code here
  }

  min() {
    return findMin(this.rootVal)

    function findMin(node){  
      if (!node.data) {
        return;
      }
      else if (!node.left) {
        return node.data
      }
      else {
        return findMin(node.left)
      }

    }
  }

  max() {
    return findMax(this.rootVal)

    function findMax(node){  
      if (!node.data) {
        return;
      }
      else if (!node.right) {
        return node.data
      }
      else {
        return findMax(node.right)
      }

    }

  }
}

module.exports = {
  BinarySearchTree
};