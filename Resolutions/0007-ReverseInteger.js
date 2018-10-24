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

// Beats 5% Solution:
var reverse = function(x) {
    let reverseX = Number(Math.abs(x).toString().split('').reverse().join(''));
    x < 0 ? reverseX *= (-1) : reverseX;
    return reverseX < -1 * Math.pow(2, 31) || reverseX > (Math.pow(2, 31) - 1) ? 0 : reverseX;   
};
