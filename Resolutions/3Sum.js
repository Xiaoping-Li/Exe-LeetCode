// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Timeout solution: This solution is pretty bad, Time Complexity Big O: n^4
var threeSum = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let m = j + 1; m < nums.length; m++) {
            if (nums[i] + nums[j] + nums[m] === 0) {
              let tripletStr = [nums[i], nums[j], nums[m]].sort((a,b) => a - b).join(' ');
              if (!result.includes(tripletStr)) result.push(tripletStr);
            }
          }
      }
  }
  return result.map(item => item.split(' ')).map(ele => ele.map(str => parseInt(str)));
};