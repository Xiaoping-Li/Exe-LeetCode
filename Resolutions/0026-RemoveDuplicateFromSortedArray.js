// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: Given nums = [1,1,2],
// Output: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.

// Example 2:
// Input: Given nums = [0,0,1,1,1,2,2,3,3,4],
// Output: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.


// Beats 100% Solution: Time complexity O(n)
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  // j is used to count how many different value this array has
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    // if different value is found, j adds on one count, also change the value at j to the non-duplicate val
    // Also make sure if no duplicate between j and i, j + 1 = i 
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};



// Time complexity: O(n)
var removeDuplicates = function(nums) {
  let size = nums.length;
  let start = 1;
  for (let i = start; i < nums.length; i++) {
    let current = nums[i];
    let preStart = nums[start - 1];
    if (current !== preStart) {
      nums[start] = nums[i];
      start++;
    } else {
      size--;
    }
  }
  return size;
};




// Beats 42% Solution: O(n^2)
const removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  
  let i = 1;
  while (i < nums.length) {
      let preVal = nums[i - 1];
      let current = nums[i];
      current === preVal ? nums.splice(i, 1) : i++; 
  }
  return nums.length;
};
