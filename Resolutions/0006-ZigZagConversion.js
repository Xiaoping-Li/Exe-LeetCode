// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

const convert = function(s, numRows) {
  if (numRows === 1) return s;
  
  const result = [];
  for (let j = 0; j < numRows; j++) {
      result.push([]);
  }
  
  const sArray = s.split('');
  const subArrayLength = 2 * numRows - 2;
  const subArray = [];
  while (sArray.length !== 0) {
      subArray.push(sArray.splice(0, subArrayLength));
  }
  
  for (let i = 0; i < subArray.length; i++) {
      let item = subArray[i];
      for (let m = 0; m < numRows; m++) {
          result[m].push(item.shift());   
      }
      for (let n = numRows - 2; n > 0; n--) {
          result[n].push(item.shift());
      }
  }
  return result.map(item => item.join('')).join(''); 
};
