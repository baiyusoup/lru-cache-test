import DoubleLinkList, { LinkNode } from "./double-linklist.mjs";

function LRUCache(capacity) {
  this.capacity = capacity;
  this.linkList = new DoubleLinkList();
  this.nodeMap = new Map();
}

LRUCache.prototype.get = function get(key) {
  const map = this.nodeMap;
  const linkList = this.linkList;
  if (map.has(key)) {
    const node = map.get(key);
    linkList.remove(node);
    linkList.add(node);
    return node;
  }
  return -1;
}

LRUCache.prototype.put = function put(key, val) {
  const map = this.nodeMap;
  const linkList = this.linkList;
  if (map.has(key)) {
    const node = map.get(key);
    node.val = val;
    linkList.remove(node);
    linkList.add(node);
    return;
  }

  if (linkList.size + 1 > this.capacity) {
    const oldest = linkList.getHead();
    linkList.remove(oldest);
    map.delete(oldest.key);
  }
  const node = new LinkNode(key, val);
  map.set(key, node);
  linkList.add(node);
}

export default LRUCache;