/*
23. 合并K个排序链表
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) {
    return null;
  }
  let result = null;
  for (let i = 0; i < lists.length; i++) {
    if (!result && lists[i]) {
      result = lists[i];
      continue;
    }
    let curList = lists[i];
    let before = (flag = result);
    while (curList) {
      while (flag && curList.val >= flag.val) {
        before = flag;
        flag = flag.next;
      }
      if (!flag) {
        before.next = curList;
        break;
      } else if (before.val === flag.val) {
        // 说明当前列表的第一个数比结果列表的第一个数小
        const tmp = curList;
        curList = curList.next;

        tmp.next = flag;
        before = result = tmp;
      } else {
        const tmp = curList;
        curList = curList.next;

        before.next = tmp;
        tmp.next = flag;
        before = before.next;
      }
    }
  }
  return result;
};
