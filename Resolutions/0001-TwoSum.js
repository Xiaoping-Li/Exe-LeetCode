/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// Beats 86.6% Solution:
// Brute Force solution time complexity is O(n^2), If we use object (hash table) to check existence of complement,
// the time complexity is O(n)
var twoSum = function(nums, target) {
  const obj = {};
  nums.forEach(item => {,
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });

  let firstIdx;
  let first;
  let pairIdx;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let pair = target - nums[i];
    if ((pair === nums[i] && obj[pair] > 1) || (pair !== nums[i] && obj[pair])) {
      firstIdx = i;
      first = nums[i];
      break;
    }
  }

  for (let j = firstIdx + 1; j < nums.length; j++) {
    if (nums[j] + first === target) {
      pairIdx = j;
    }
  }

  return [firstIdx, pairIdx];
};



// Beats 32% Solution:
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


// Beats 13% Solution:
var twoSum = function(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i,j);
      }
    }
  }
  return result;
};
