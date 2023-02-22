// Palindrome Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = function (head) {
  // Finding the middle
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // Reversing the second half
  let prev = null;
  let current = slow;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  // Check if it is palindrom
  while (head && prev) {
    if (head.val !== prev.val) return false;
    head = head.next;
    prev = prev.next;
  }
  return true;
};
