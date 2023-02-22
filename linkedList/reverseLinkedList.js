// Reverse Linked List

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Iterative
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};
