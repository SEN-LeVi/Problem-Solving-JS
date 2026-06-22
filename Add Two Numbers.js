/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0);                       // 1
    let current = dummy;                                 // 2
    let carry = 0;                                       // 3

    while (l1 !== null || l2 !== null || carry !== 0) {  // 4
        const x = l1 !== null ? l1.val : 0;              // 5
        const y = l2 !== null ? l2.val : 0;              // 6
        const sum = x + y + carry;                       // 7

        carry = Math.floor(sum / 10);                    // 8
        current.next = new ListNode(sum % 10);           // 9
        current = current.next;                          // 10

        if (l1 !== null) l1 = l1.next;                   // 11
        if (l2 !== null) l2 = l2.next;                   // 12
    }

    return dummy.next;                                   // 13
};
