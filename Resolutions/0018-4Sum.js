// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? 
// Find all unique quadruplets in the array which gives the sum of target.

// Note:
// The solution set must not contain duplicate quadruplets.

// Example:
// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
// A solution set is:
/*[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

// Beat 41.42% Solution:
const fourSum = function(nums, target) {
  let rtn = [];
  if (nums.length < 4) return rtn;
  nums.sort((a,b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;
    for (let j = i + 1, k = j + 1, l = nums.length - 1; k < l;) {
      console.log(i,j,k,l);
      let temp = nums[i] + nums[j] + nums[k] + nums[l];
      if (temp === target) {
        rtn.push([nums[i], nums[j], nums[k], nums[l]]);
        k++;
        l--;
        while (k < l && nums[k] === nums[k - 1]) {
          k++;
        } 
        while (k < l && nums[l] === nums[l + 1]) {
          l--;
        }
      } else if (temp > target) {
        l--;
        while(k < l && nums[l] === nums[l + 1]) {
          l--;
        }
      } else {
        k++;
        while(nums[k] === nums[k - 1]) {
          k++;
        }
      }
 
      if (k >= l) {
        j++;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
        k = j + 1;
        l = nums.length - 1;
      }
    }
  } 

  return rtn; 
};

//fourSum([-1,-5,-5,-3,2,5,0,4], -7);
//fourSum([-1, -1, -1, -1, -1, -1, -1, -1], -4);
// fourSum([1, 0, -1, 0, -2, 2], 0)
fourSum([-3,-2,-1,0,0,1,2,3],0)
