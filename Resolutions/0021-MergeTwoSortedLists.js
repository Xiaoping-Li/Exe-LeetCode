/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two 
lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/

// Beat 2% solution:
var mergeTwoLists = function(l1, l2) {
  // Special cases
  if (!l1 && l2) return l2;
  if (!l2 && l1) return l1;
  if (!l1 && !l2) return null;
    
  let rtn;
  let currentL1 = l1;
  let currentL2 = l2;
  // Assign the smaller one between l1 and l2 to the head of rtn;
  if (currentL1.val < currentL2.val) {
    rtn = new ListNode(currentL1.val);
    currentL1 = currentL1.next;
  } else if (currentL2.val < currentL1.val) {
    rtn = new ListNode(currentL2.val); 
    currentL2 = currentL2.next;
  } else {
    rtn = new ListNode(currentL1.val);
    rtn.next = new ListNode(currentL2.val);
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
  }
  // Add the smaller val between l1 and l2 to the tail of rtn
  while(currentL1 && currentL2) {
    if (currentL1.val < currentL2.val) {
      let tail = rtn;
      while(tail.next) {
        tail = tail.next;
      }
      tail.next = new ListNode(currentL1.val);
      currentL1 = currentL1.next;
    } else if (currentL2.val < currentL1.val) {
      let tail = rtn;
      while(tail.next) {
        tail = tail.next;
      }
      tail.next = new ListNode(currentL2.val); 
      currentL2 = currentL2.next;
    } else {
      let tail = rtn;
      while(tail.next) {
        tail = tail.next;
      }
      tail.next = new ListNode(currentL1.val);
      tail.next.next = new ListNode(currentL2.val);
      currentL1 = currentL1.next;
      currentL2 = currentL2.next;
    }
  }
  // Only one or none list will have remainder, add the remainder to the tail of rtn
  if (currentL1) {
    let tail = rtn;
    while(tail.next) {
      tail = tail.next;
    }
    tail.next = currentL1;  
  }

  if (currentL2) {
    let tail = rtn;
    while(tail.next) {
      tail = tail.next;
    }
    tail.next = currentL2;  
  }

  return rtn;
};

