// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.

// Beat 100% solution:
var removeNthFromEnd = function(head, n) {
  // Count the length of the linked list: head
  let length = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    length++;
  }
  // If only one node, after remove, will return null;
  if (length === 1) return null;
  
  // More than one node:
  // Define i: count node from head
  let i = length - n;
  let preNth = head;
  // If i === 0, remove current headNode, return new head node
  if (i === 0) {
    head = head.next;
    return head;
  } else if (i === 1) {
    // If remove the node next to head
    preNth = head; 
  } else {
    while (i > 1) {
      preNth = preNth.next;
      i--;
    }
  }
  
  let nextNth = preNth.next.next;
  // If remove the last node:
  if (!nextNth) {
    preNth.next = null;
  } else {
    // Remove node in front of last node:
    preNth.next = nextNth;
  }
  
  return head;  
};
