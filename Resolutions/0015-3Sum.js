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


// Beat 90% solution: reference https://leetcode.com/problems/3sum/discuss/7407/JavaScript-Beat-94.29
const threeSum = function(nums) {
  const result = [];
  if (nums.length < 3) return result;

  nums.sort((a,b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
};




// Beat 1.9% Solution: Pretty bad, need improve. Use {} to store combinations 

const threeSum = function(nums) {
  nums.sort((a,b) => a - b);

  const obj = {};
  const negaArr = [];
  const posiArr = [];
  const zeroArr = [];
  const result = {};
  nums.forEach(num => {
    if (num < 0) {
      negaArr.push(num);
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    } else if (num > 0) {
      posiArr.push(num);
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    } else {
      zeroArr.push(num);
    } 
  });

  // Special case: 
  if (zeroArr.length >= 3) result['0,0,0'] = 1;

  let short;
  if (zeroArr.length !== 0) {
    posiArr.length >= negaArr.length ? short = negaArr : short = posiArr;

    short.forEach(num => {
      let opposite = num * (-1);
      if (obj[opposite]) {
        let keyArr = [num, 0, opposite].sort((a,b) => a - b);
        let key = keyArr[0] + ',' + keyArr[1] + ',' + keyArr[2];
        if (!result[key]) {
          result[key] = 1;
        } else {
          result[key] += 1;
        }
      }
    });
  }

  for (let i = 0; i < negaArr.length; i++) {
    let nega = negaArr[i];
    for (let j = 0; j < posiArr.length; j++) {
      let posi = posiArr[j];
      let third = (nega + posi) * (-1);
      if (third === nega || third === posi) {
        if (obj[third] > 1) {
          let keyArr = [nega, posi, third].sort((a,b) => a - b);
          let key = keyArr[0] + ',' + keyArr[1] + ',' + keyArr[2];
          if (!result[key]) {
            result[key] = 1;
          } else {
            result[key] += 1;
          }
        }
      }

      if (third !== nega && third !== posi) {
        if (obj[third]) {
          let keyArr = [nega, posi, third].sort((a,b) => a - b);
          let key = keyArr[0] + ',' + keyArr[1] + ',' + keyArr[2];
          if (!result[key]) {
            result[key] = 1;
          } else {
            result[key] += 1;
          }
        }
      } 
    }
  }

  return Object.keys(result).map(item => {
    let arr = item.split(',');
    return arr.map(ele => parseInt(ele));
  });
};




// Beat 5% solution: use [] to store combinations

const threeSum = function(nums) {
  nums.sort((a,b) => a - b);

  const obj = {};
  const negaArr = [];
  const posiArr = [];
  const result = [];

  nums.forEach(num => {
    if (num < 0 && num !== negaArr[negaArr.length - 1]) {
      negaArr.push(num);
    } 

    if (num > 0 && num !== posiArr[posiArr.length - 1]) {
      posiArr.push(num);
    }

    if (!obj[num]) {
        obj[num] = 1;
    } else {
        obj[num]++;
    }
  });
 
  if (obj[0] >= 3) result.push([0,0,0]);

  for (let i = 0; i < negaArr.length; i++) {
    let nega = negaArr[i];
    for (let j = 0; j < posiArr.length; j++) {
      let posi = posiArr[j];
      let third = (nega + posi) * (-1);
       
      if (third === nega || third === posi) {
        if (obj[third] > 1) {
          result.push([nega, third, posi]);
        }
      } else {
        if (obj[third]) {
          if ((third < posi && third > 0) || third < nega) continue;
          result.push([nega, third, posi]); 
        }
      }
    }
  }

  return result;
};
