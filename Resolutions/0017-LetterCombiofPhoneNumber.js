// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


// Beat 94% solution:
const letterCombinations = function(digits) {
  const obj = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const array = digits.split('');
  if (array.length === 0) return [];
  if (array.length < 2) return obj[array[0]].split('');
  const firstDigit = array.shift();
  let rtn = obj[firstDigit].split('');
  
  while (array.length > 0) {
    let nextDigit = array.shift();
    let next = obj[nextDigit].split('');
    rtn = rtn.map(item => {
      return next.map(ele => item + ele);
    });
    rtn = rtn.reduce((a,b) => a.concat(b))
  }
  return rtn;
};
