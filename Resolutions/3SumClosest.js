// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the 
// sum of the three integers. You may assume that each input would have exactly one solution.

// Example:
// Given array nums = [-1, 2, 1, -4], and target = 1.
// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Beat 3.35% Solution:
const threeSumClosest = function(nums, target) {
  nums.sort((a,b) => a - b);
  let n = nums.length;
  let closest = nums[n - 3] + nums[n - 2] + nums[n - 1];
  let diff = Math.abs(closest - target);
  if (diff === 0) return closest;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i] && nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) continue;
    for (let j = i + 1, k = nums.length - 1;j < k;) {
      let temp = nums[i] + nums[j] + nums[k];

      if (Math.abs(temp - target) < diff) {
        closest = temp;
        diff = Math.abs(temp - target);
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
        if (j === k) {
          j++;
          k = nums.length - 1
        }
      } else {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
        if (j === k) {
          j++;
          k = nums.length - 1
        }
      }  
    }
  }
  return closest;
};
