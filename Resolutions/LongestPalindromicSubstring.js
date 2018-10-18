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
  if (s.length < 2) return s;
  let longest = s[0]; 
  for (let i = 0; i < s.length; i++) {
    if (s.length - i <= longest.length) return longest;
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        let m = i;
        let n = j;
        while (s[m] === s[n] && m < n) {
          m++;
          n--;
        }
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
