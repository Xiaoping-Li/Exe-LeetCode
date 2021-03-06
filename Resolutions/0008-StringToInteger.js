/*
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting 
from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as 
a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the 
behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str 
is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
*/

/*
Example 1:

Input: "42"
Output: 42
Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:

Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
Example 4:

Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:

Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
*/

// Beats 41.5% Solution:
var myAtoi = function(str) {
  // Trim off all the white space before the first valid character
  let rtn = '';
  let i = 0;
  while (i < str.length) {
    if (str[i] === ' ') {
      i++;
    } else {
      break;
    }
  };
  const trimStr = str.slice(i);

  // store all valid characters in varaiable rtn, start from the 0 index of trimed string
  // parseInt('0') returns 0, which is also false, should consoder this special case
  if (!parseInt(trimStr[0])) {
    if (trimStr[0] === '-' || trimStr[0] === '+' || trimStr[0] === '0') {
      rtn += trimStr[0];
    } else {
      return 0;
    }
  } else {
    rtn += trimStr[0];
  }

  // Check other characters in trimed string, also should consider parseInt('0') special case  
  let j = 1;
  while (j < trimStr.length) {
    if (parseInt(trimStr[j]) || (!parseInt(trimStr[j]) && trimStr[j] === '0')) {
      rtn += trimStr[j];
      j++;
    } else {
      break;
    } 
  }
  // If rtn only has one element, and this element is invalid, return 0
  if (rtn.length === 1 && !parseInt(rtn[0])) return 0;
  // varaiable result is the return value, check it's range before return
  let result = parseInt(rtn);
  if (result > Math.pow(2, 31) - 1) result = Math.pow(2, 31) - 1;
  if (result < -1 * Math.pow(2,31)) result = -1 * Math.pow(2,31);

  return result; 
};
