/*
Description:

Implement the method length, which accepts a linked list (head), and returns the length of the list.

For example: Given the list: 1 -> 2 -> 3 -> 4, length should return 4.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

Note: the list may be null and can hold any type of value.

Good luck!
*/
function length(head) {
  return head ? 1 + length(head.next) : 0;
}

console.log(length(null)); //0
console.log(length(listFromArray([1, 2, 3, 4]))); //4
