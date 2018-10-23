// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: "cbbd"
// Output: "bb"

// Beat 11% Solution:
const longestPalindrome = function(s) {
  // Special case s is empty or one letter long
  if (s.length < 2) return s;
  // Set default longest is the first letter of s
  let longest = s[0]; 
  // Loop through s
  for (let i = 0; i < s.length; i++) {
    // If total length from i to the end is not big than the longest length, then it's impossible to find a longer one
    if (s.length - i <= longest.length) return longest;
    // loop from the end of s
    for (let j = s.length - 1; j > i; j--) {
      // If find a match pair, start from here, check if inside corresponding letters also match
      if (s[i] === s[j]) {
        let m = i;
        let n = j;
        while (s[m] === s[n] && m < n) {
          m++;
          n--;
        }
        // If the last match pair has 0 or 1 letter between them, then this is a valid palindrome
        if (n - m < 1 ) {
          let palind = s.slice(i, j+1);
          if (palind.length > longest.length) longest = palind;
        }
      }
    }
  }
  return longest;    
};

longestPalindrome('aaaabaaa');
