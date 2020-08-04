/*
22. 括号生成
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例：

输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
*/
var generateParenthesis = function (n) {
  const result = [];

  function executor(prefix, left, right, flag) {
    if (!left.length && !right.length) {
      result.push(prefix);
      return;
    }
    if (left.length > 0) {
      executor(
        `${prefix}${left[0]}`,
        left.slice(0, left.length - 1),
        right,
        flag + 1
      );
    }
    if (flag > 0) {
      executor(
        `${prefix}${right[0]}`,
        left,
        right.slice(0, right.length - 1),
        flag - 1
      );
    }
  }

  executor('', new Array(n).fill('('), new Array(n).fill(')'), 0);

  return result;
};

console.log(generateParenthesis(3));
