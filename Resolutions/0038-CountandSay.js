/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221 
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
10.     13211311123113112211

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.
*/


// This question is really confusing in the beginning, but once you figure out, it is easy
// Find countAndSay(n-1) first, count how many each element in it,
// If no repeat, then 1+element
// If repeat k times, then k+element
// Beats 65% Solution:
var countAndSay = function(n) {
  if (n === 1) return '1';
  let prev = countAndSay(n - 1);
  let rtn = '';
  
  let i = 0;
  while (i < prev.length) {
    if (prev[i] !== prev[i + 1]) {
      rtn += 1 + prev[i];
      i++;
    } else {
      let k = i;
      while (prev[i] === prev[k]) {
        k++;
      }
      rtn += (k - i) + prev[i];
      i = k;
    }
  }

  return rtn;    
};
