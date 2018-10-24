/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the
purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
// Beats 93% Solution: Use Math faster
const reverse = function(x) {
  let absX = Math.abs(x);
  let result = 0;
  while (absX > 0) {
    let remainder = absX % 10;
    result = (result * 10) + remainder;
    absX = (absX - remainder) / 10;
  }
  return result > Math.pow(2, 31) ? 0 : result * Math.sign(x);
};


// Beats 65% Solution:
var reverse = function(x) {
  const absX = Math.abs(x);
  const revers = absX.toString().split('').reverse().join('');
  let result;
  x >= 0 ? result = parseInt(revers) : result = parseInt(-1 * revers); 
  return result >= -1 * Math.pow(2, 31) && result <= Math.pow(2, 31) - 1 ? result : 0;
};

// Beats 65% Solution:
var reverse = function(x) {
  const xStr = x.toString();
  let reverse = '';
  for (let i = xStr.length - 1; i > -1; i--) {
    if (parseInt(xStr[i])) {
      reverse += xStr[i];
    }
  } 

  let result;
  x >= 0 ? result = parseInt(reverse) : result = parseInt(-1 * reverse); 
  return result >= -1 * Math.pow(2, 31) && result <= Math.pow(2, 31) - 1 ? result : 0; 
};


// Beats 5% Solution:
var reverse = function(x) {
    let reverseX = Number(Math.abs(x).toString().split('').reverse().join(''));
    x < 0 ? reverseX *= (-1) : reverseX;
    return reverseX < -1 * Math.pow(2, 31) || reverseX > (Math.pow(2, 31) - 1) ? 0 : reverseX;   
};
