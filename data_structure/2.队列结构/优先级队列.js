const { Queue } = require("./queue");

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue {
  constructor() {
    super();
  }
  // items = [];
  // 进入队列
  enqueue(element, priority) {
    // 创建一个queueElement 元素
    const queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      // 如果当前队列是空的话 则直接添加
      console.log(3);
      this.items.push(queueElement);
    } else {
      // 否则循环比较大小来添加
      let isAdd = false; // 是否完成添加标识
      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        if (item.priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          console.log(1);
          isAdd = true;
          break;
        }
      }
      // 如果循环结束了还没有添加 则需要在队列最后添加
      if (!isAdd) {
        console.log(2);

        this.items.push(queueElement);
      }
    }
  }
}

const pq = new PriorityQueue();

pq.enqueue("aaa", 1);
pq.enqueue("bbb", 3);
pq.enqueue("ccc", 2);

console.log(pq.toString());
