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
  }

  enqueue(value) {
    this.head = add(this.head, value);

    function add(node, value){
      if (!node) {
        return new ListNode(value);
      }

      if (!node.next){
        node.next = new ListNode(value);
        return node
      } 
      
      if (node.next){
        node.next = add(node.next, value)
        return node
      }
    }
  }

  getUnderlyingList() {
    return this.head
  }


  dequeue() {
    if(!this.head) {
      return;
    }

      const topElement = this.head.value;
      this.head = this.head.next;
      
      return topElement
    }

}


module.exports = {
  Queue
};
