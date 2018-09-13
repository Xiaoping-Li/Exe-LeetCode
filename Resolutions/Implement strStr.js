// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

const strStr = function(haystack, needle) {
  if (!needle) return 0;
  const needleLen = needle.length;
  for (let i = 0; i < haystack.length; i++) {
      if (haystack.slice(i, i + needleLen) === needle) return i;
  }
  return -1;
};