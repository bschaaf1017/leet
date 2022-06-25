/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

*/

class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  head;
  currNode;
  constructor(head) {
    this.head = head ? head : new ListNode
  }

  add(val) {
    console.log('add')
    if (this.currNode) {
      const tempCurrNode = new LinkedList(val)
      this.currNode.next = tempCurrNode;
      this.currNode = tempCurrNode
    } else {
      const tempNode = new ListNode(val)
      this.head.next = tempNode;
      this.currNode = tempNode
    }
  }
}

var removeNthFromEnd = function(head, n) {

};

(function test() {
  // const head = new ListNode(1,
  //   new ListNode(2,
  //     new ListNode(3,
  //       new ListNode(4,
  //         new ListNode(5)
  //       )
  //     )
  //   )
  // );
  const head = new LinkedList()
  head.add(1)
  console.log(head.head)
  console.log(head)
})()