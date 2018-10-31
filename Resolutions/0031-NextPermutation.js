/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
1,3,2 → 2,1,3 
*/


// Beats 99% solution: 
var nextPermutation = function(nums) {
  if (nums.length <= 1) return nums;
  // Helper function downSort for decsent nums: Big O(n)
  const downSort = (nums, n) => {
    for (let i = n, j = nums.length - 1; i < j; i++, j--) {
      let iVal = nums[i];
      let jVal = nums[j];
      nums[i] = jVal;
      nums[j] = iVal;
    }
  }
  // Helper function bubbleSort: Big O (n ^ n)
  const bubbleSort = (nums, n) => {
    let count = nums.length - n;
    while(count > 0) {
      for (let i = n; i < nums.length; i++) {
        let current = nums[i];
        let next = nums[i + 1];
        if (current > next) {
          nums[i] = next;
          nums[i + 1] = current;
        }
      }
      count--;
    }
  }
  // descent is a flag
  // sortIdx will be used in bubble sort
  let descent = true;
  let sortIdx;
  for (let i = nums.length - 1; i > 0; i--) {
    let current = nums[i];
    let prev = nums[i - 1];
    // outloop is a flag to break out layer for loop
    let outloop = false;
    if (current > prev) {
      descent = false;
      // from i to the end, find the smallest val that > prev && < current, record val, and it's index
      let smallest = [current, i];
      for (let j = i; j < nums.length; j++) {
        if (nums[j] > prev && nums[j] < current) {
          smallest[0] = nums[j];
          smallest[1] = j;
        }
      }
      // Swap smallest with prev
      nums[i - 1] = smallest[0];
      nums[smallest[1]] = prev;
      // Find sortIex and set outloop breaker to true 
      sortIdx = i;
      outloop = true;
      break;
    }
    if (outloop) break;
  }
  // Bubble sort nums from sortIdx (i)
  bubbleSort(nums, sortIdx);
  // If nums is sorted in descent order, use downsort directly. 
  if (descent) downSort(nums, 0); 
  return nums;  
};
