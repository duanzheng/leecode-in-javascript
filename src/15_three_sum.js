/**
 * 15. 三数之和
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */
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
