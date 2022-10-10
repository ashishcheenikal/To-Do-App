// Identify whether the given linked list is cyclic or not?

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
const hasCycle = (head) => {
  let set = new Set();
  let current = head;

  while (current) {
    if (set.has(current)) {
      return true;
    } else {
      set.add(current);
    }

    current = current.next;
  }
  return false;
};
