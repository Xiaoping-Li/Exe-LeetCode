// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1: 
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2: 
// Input: ["dog","racecar","car"]
// Output: ""

// Example 3:
// Input: []
// Output: ""

// Solution:
const longestCommonPrefix = function(strs) {
  let prefix = '';
  if (strs.length === 0) return prefix;
  
  const firstWord = strs[0];
  
  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== firstWord[i]) {
        return prefix;
      }
    }
    prefix += firstWord[i];
  }  
  return prefix;    
};

