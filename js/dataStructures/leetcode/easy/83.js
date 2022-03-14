/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 示例 1：
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function (head) {
  if (!head) {
    return null
  }
  const listNode = new ListNode(null)
  let pre = listNode
  while (head !== null) {
    if (pre.val !== head.val) {
      pre.next = new ListNode(head.val)
      pre = pre.next
    }
    head = head.next
  }
  return listNode.next !== null ? listNode.next : listNode
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
console.log(deleteDuplicates({
  val: 0,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 3,
          next: null
        }
      }
    }
  }
}))

console.log(deleteDuplicates({
  val: 0,
  next: {
    val: 0,
    next: {
      val: 0,
      next: {
        val: 0,
        next: {
          val: 0,
          next: null
        }
      }
    }
  }
}))

console.log(deleteDuplicates({
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null
    }
  }
}))
console.log(deleteDuplicates({
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null
        }
      }
    }
  }
}))