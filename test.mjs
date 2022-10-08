import LRUCache from "./lru.mjs";

const cache = new LRUCache(4);

cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);;
cache.put(3, 33);
cache.get(2);

let p = cache.linkList.getHead();
while(p) {
  console.log(p.key, p.val);
  p = p.next;
}