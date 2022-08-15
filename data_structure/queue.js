// 创建队列类
class Queue {
  #items = [];
  // 在队列中添加元素
  enqueue(element) {
    this.#items.push(element);
  }

  // 从队列中取出第一个元素
  dequeue() {
    return this.#items.shift();
  }

  // 判断队列书否为空

  isEmpty() {
    return this.#items.length === 0;
  }

  // 查看队列的第一个元素
  front() {
    return this.#items[0];
  }

  // 队列的长度
  size() {
    return this.#items.length;
  }

  toString() {
    return this.#items.reduce((res, item) => {
      return `${res} ${item}`;
    }, "");
  }
}

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue("hhaha");

// console.log(queue.toString());

const names = ["lili", "lucy", "chu", "lei", "why"];

function passGame(nameList, num) {
  const queue = new Queue();

  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  const end = queue.front();
  return nameList.indexOf(end);
}

console.log(passGame(names, 3));
