/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

// Beats 56% Solution:
var intToRoman = function(num) {
    let s = num.toString();
    let rtn = '';
    while (s) {
        let n = s.length;
        if (n === 4) {
            let m = parseInt(s[0]);
            while (m > 0) {
                rtn += 'M';
                m--;
            }
        } else if (n === 3) {
            let m = parseInt(s[0]);
            if (m === 9) {
                rtn += 'CM';
            } else if (m >= 5) {
                rtn += 'D';
                while (m - 5 > 0) {
                    rtn += 'C';
                    m--;
                }
            } else if (m === 4) {
                rtn += 'CD';
            } else {
                while (m > 0) {
                    rtn += 'C';
                    m--;
                }
            }
        } else if (n === 2) {
            let m = parseInt(s[0]);
            if (m === 9) {
                rtn += 'XC';
            } else if (m >= 5) {
                rtn += 'L';
                while (m - 5 > 0) {
                    rtn += 'X';
                    m--;
                }
            } else if (m === 4) {
                rtn += 'XL';
            } else {
                while (m > 0) {
                    rtn += 'X';
                    m--;
                }
            }
        } else {
            let m = parseInt(s[0]);
            if (m === 9) {
                rtn += 'IX';
            } else if (m >= 5) {
                rtn += 'V';
                while (m - 5 > 0) {
                    rtn += 'I';
                    m--;
                }
            } else if (m === 4) {
                rtn += 'IV';
            } else {
                while (m > 0) {
                    rtn += 'I';
                    m--;
                }
            }  
        }
        s = s.slice(1);
    }
    return rtn;
};
