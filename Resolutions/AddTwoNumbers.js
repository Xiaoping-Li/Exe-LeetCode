// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of 
// their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Beat 62% Solution:
var addTwoNumbers = function(l1, l2) {
  // count the length of l1 and l2
  let lengL1 = 1;
  let lengL2 = 1;
  let currentL1 = l1;
  let currentL2 = l2;
  while (currentL1.next) {
    currentL1 = currentL1.next;
    lengL1++;
  }
  while (currentL2.next) {
    currentL2 = currentL2.next;
    lengL2++;
  }
  
  // assign long and short linked list
  let long;
  let short;
  if (lengL1 >= lengL2) {
    long = l1;
    short = l2;
  } else {
    long = l2;
    short = l1;
  }

  // Add corresponding short's node value to long's node value, return long as the result
  // Loop through short head to tail
  let currentLong = long;
  let currentShort = short;
  while (currentShort) {
    if (currentLong.val + currentShort.val < 10) {
      currentLong.val += currentShort.val;
    } else {
      if (!currentLong.next) {
        currentLong.next = new ListNode(1);
        currentLong.val = currentLong.val + currentShort.val - 10;
      } else {
        currentLong.next.val += 1;
        currentLong.val = currentLong.val + currentShort.val - 10;
      }
    }
    currentLong = currentLong.next;
    currentShort = currentShort.next;
  }

  // Loop through the rest of l2 till tail
  while (currentLong) {
    if (currentLong.val >= 10) {
      if (!currentLong.next) {
        currentLong.next = new ListNode(1);
        currentLong.val -= 10; 
      } else {
        currentLong.next.val += 1;
        currentLong.val -= 10;
      } 
    }
    currentLong = currentLong.next;
  }
  
  // Return long as the final result
  return long;
};

const l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
const l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(9);
addTwoNumbers(l1, l2);

