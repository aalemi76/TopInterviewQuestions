// Remove Nth Node From End of List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < n; i++) {
    if (fast.next === null) {
      if (i === n - 1) head = head.next;
      return head;
    }
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  if (slow.next !== null) {
    slow.next = slow.next.next;
  }

  return head;
};
