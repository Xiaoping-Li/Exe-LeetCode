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

// 311/313 tests pass solution: Didn't pass the big data set
const threeSum = function(nums) {
  
  const addTwo = function(nums) {
    let result = {};
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (!result[nums[i].toString() + ',' + nums[j].toString()]) {
          result[nums[i].toString() + ',' + nums[j].toString()] = nums[i] + nums[j];
        }
      }
    }
    return result;
  }

  const validatePair = function(obj, arr) {
    const result = [];
    for (let key in obj) {
      if (arr.includes(obj[key] * (-1))) {
        result.push(key + ',' + obj[key] * (-1).toString());
      }
    }
    return result;
  }

  const noNegative = [];
  const negative = [];
  nums.forEach(num => {
    if (num < 0) {
      negative.push(num);
    } else {
      noNegative.push(num);
    }
  });

  const negaObj = addTwo(negative);
  const noNegaObj = addTwo(noNegative);
  const negaArray = validatePair(negaObj, noNegative);
  const noNegaArray = validatePair(noNegaObj, negative);
  
  if (noNegative.filter(item => item === 0).length >= 3) {
    noNegaArray.push('0,0,0');
  }

  return negaArray.concat(noNegaArray).map(item => {
    let arr = item.split(',');
    return arr.map(ele => parseInt(ele));
  });

};
