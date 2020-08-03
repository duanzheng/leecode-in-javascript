var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }

  const result = [];
  nums = nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1,
      k = nums.length - 1;
    while (k > j) {
      const tempR = nums[i] + nums[j] + nums[k];
      if (tempR > 0) {
        k--;
        continue;
      }
      if (tempR < 0) {
        j++;
        continue;
      }
      if (tempR === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
      }

      while (nums[j] === nums[j - 1]) {
        j++;
      }
      while (nums[k] === nums[k + 1]) {
        k--;
      }
    }
  }
  return result;
};

console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
