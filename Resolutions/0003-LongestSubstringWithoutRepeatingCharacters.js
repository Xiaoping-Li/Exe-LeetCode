/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// Beats 3% Solution: Time Complexity O(n^2)
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  for (let i = 0; i < s.length;i++) {
    if (s[i] === s[i + 1]) continue;
    if (s.length - i <= longest) return longest;
    const obj = {};
    for (let j = i; j < s.length; j++) {
      if (!obj[s[j]]) {
        obj[s[j]] = 1;
      } else {
        break;
      }
    }

    let subLength = Object.keys(obj).length;
    if (subLength > longest) {
      longest = subLength;
    }     
  } 
  return longest;
};
