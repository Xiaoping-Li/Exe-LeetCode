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

// Beat 1.9% Solution: Pretty bad, need improve 

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

