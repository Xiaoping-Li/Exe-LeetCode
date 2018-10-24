/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/

// Beats 92% Solution:
var isPalindrome = function(x) {
  // These special cases in order
  if (x < 0 ) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;
  // Check if the reverse number equal to the original
  let num = x;
  let reverse = 0;
  while (num > 0) {
    let remainder = num % 10;
    reverse = (reverse * 10) + remainder;
    num = (num - remainder) / 10;
  }
  return reverse === x;
};


// Beats 47% Solution:
var isPalindrome = function(x) {
  if (x < 0) return false;
 
  let num = x;
  let reverse = 0;
  while (num > 0) {
    let remainder = num % 10;
    reverse = (reverse * 10) + remainder;
    num = (num - remainder) / 10;
  }

  return reverse === x || x === 0;
};


// Beats 28.8% Solution: Use converting the integer to a string
var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') === x.toString() ? true : false;    
};
