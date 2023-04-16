const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    this.head = add(this.head, value);

    function add(node, value){
      if (!node) {
        return new ListNode(value);
      }

      if (node && node.next === null ){
        return node
      } 
      
      if (node && node.next){

        while (!node.next) {
          node = node.next
        }
      return node
      }
        
    }
  }

  getUnderlyingList() {
    this.head = getItems(this.head)
    function getItems(node){
      for (let i=0; i < node.length ; i++){
        console.log(node)
      }
    return;     
    }

  }


  dequeue() {
    this.head = deleteItem(this.head)

    function deleteItem (node) {
      if (!node) {
        return;
      }
      
      let current = node;
      node = current.next;
      current = null;
      return node
    }
  }
}

module.exports = {
  Queue
};
