// 双向链表节点
/**
 * @param {string} key 
 * @param {any} val 
 * @param {LinkNode} next 
 * @param {LinkNode} prev 
 */
export function LinkNode(key, val, next, prev) {
  this.val = val;
  this.key = key;
  this.next = next || null;
  this.prev = prev || null;
}

function DoubleLinkList() {
  this.head = new LinkNode();
  this.tail = new LinkNode;
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
}

DoubleLinkList.prototype.add = function add(node) {
  const prev = this.tail.prev;
  prev.next = node;
  node.prev = prev;
  node.next = this.tail;
  this.tail.prev = node;
  this.size++;
}

DoubleLinkList.prototype.remove = function remove(node) {
  const prev = node.prev;
  const next = node.next;
  prev.next = next;
  next.prev = prev;
  this.size--;
}

DoubleLinkList.prototype.getHead = function getHead() {
  return this.head.next;
}

export default DoubleLinkList;
