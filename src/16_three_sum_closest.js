/**
 * 16. 最接近的三数之和
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

 

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 

提示：

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
 */

var threeSumClosest = function (nums, target) {
  let flag = Number.MAX_SAFE_INTEGER;
  let result;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) {
        return sum;
      }
      if (sum < target) {
        if (Math.abs(sum - target) < flag) {
          flag = Math.abs(sum - target);
          result = sum;
        }
        j++;
        continue;
      }
      if (sum > target) {
        if (Math.abs(sum - target) < flag) {
          flag = Math.abs(sum - target);
          result = sum;
        }
        k--;
        continue;
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

console.log(threeSumClosest([-1, 2, 1, -4], 1));
