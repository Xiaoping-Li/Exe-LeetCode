// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Example 1:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubArray = function(nums) {
    let biggestSum = nums.filter(num => num < 0).reduce((sum, num) => sum + num, 0);
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
          temp += nums[j];
          if (temp > biggestSum) {
            biggestSum = temp;
          }
        }
        temp = 0;
    }
    return biggestSum;    
};

// BigO (n^2) Try to find O(n) solution