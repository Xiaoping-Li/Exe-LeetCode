/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

// Use Data Structure Stack
var isValid = function(s) {
  const leftDict = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const rightDict = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let popout;
    if (leftDict[s[i]]) {
      stack.push(s[i]);
    }

    if (rightDict[s[i]]) {
      popout = stack.pop();
      if (popout !== rightDict[s[i]]) return false;
    }
  }
  
  if (stack.length > 0) return false;
  return true;   
};




// Beats 1.82% Solution: Time Complexity: O(n^2)
var isValid = function(s) {
  const dict = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false;
  
  let str = s;
  while (str.length > 1) {
    let i = 0;
    while (dict[str[i]]) {
      i++;
    }
    if (str[i] !== dict[str[i - 1]]) {
      return false;
    } else {
      str = str.slice(0, i - 1) + str.slice(i + 1);
    }
  }
  return true;   
};
