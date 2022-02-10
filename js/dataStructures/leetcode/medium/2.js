
/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/add-two-numbers
 */

// 非链表结构
var addTwoNumbers = function (l1, l2) {
  const result = []
  const len = l1.length > l2.length ? l1.length : l2.length
  let proximal = false
  for (let i = 0; i < len; i++) {
    const one = l1[i] || 0
    const two = l2[i] || 0
    let sum = one + two
    sum = proximal ? sum + 1 : sum
    proximal = false
    if (sum > 9) {
      proximal = true
      result.push(sum % 10)
    } else {
      result.push(sum)
    }
  }
  return result
}
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 方法二： 链表结构
var addTwoNumbers = function (l1, l2) {
  const listNode = new ListNode(0)
  let pre = listNode
  let sum = 0
  let proximal = false
  while (l1 !== null || l2 !== null || proximal) {
    const one = l1 && l1.val || 0
    const two = l2 && l2.val || 0
    sum = one + two
    sum = proximal ? sum + 1 : sum
    proximal = false
    l1 = l1 && l1.next || null
    l2 = l2 && l2.next || null
    pre.next = new ListNode(sum % 10)
    proximal = sum > 9
    pre = pre.next
  }
  return listNode.next
}
console.log(addTwoNumberss({
  val: 9,
  next: {
    val: 9
  }
}, {
  val: 9
}))