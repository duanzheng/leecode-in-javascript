/**
 * 18. 四数之和
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 */

var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  nums = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] > 0 && nums[i] > target) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    while (j < nums.length - 2) {
      let k = j + 1,
        l = nums.length - 1;
      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
        } else if (sum > target) {
          l--;
          continue;
        }
        while (nums[k] === nums[k + 1]) {
          k++;
        }
        k++;
      }
      while (nums[j] === nums[j + 1]) {
        j++;
      }
      j++;
    }
  }
  return result;
};

console.log(fourSum([-1, -5, -5, -3, 2, 5, 0, 4], -7));
