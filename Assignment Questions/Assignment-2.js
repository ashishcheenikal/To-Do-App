//The head of the linked list contains an unique integer, while nums is a subset on linked list values. The output
// needs to be a number of connected components in nums where two values are connected if they appear
// consecutively in the linked list


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var numComponents = function (head, G) {
  let result = 0;
  let mark = false;
  let i = 0;
  while (head != null && i != G.length) {
    if (G.indexOf(head.val) == -1) {
      head = head.next;
      mark = false;
      continue;
    }
    if (mark) {
      head = head.next;
    } else {
      mark = true;
      result++;
      head = head.next;
    }
    i++;
  }
  return result;
};
