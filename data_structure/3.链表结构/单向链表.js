// 节点类
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 创建链表类
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 向链表最后添加节点
  append(data) {
    // 创建一个新节点
    const node = new Node(data);

    if (this.length === 0) {
      // 如果没有节点则head指向这个节点
      this.head = node;
    } else {
      // 如果有节点则让最后一个元素的next指向当前添加节点
      let current = this.head;
      while (current.next) {
        current = current.next; // 如果next不为null 则让当前节点指向next
      }
      current.next = node; // 将node节点赋值 next
    }
    this.length += 1; // 让长度加一
  }

  // 输出字符串
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += JSON.stringify(current.data) + " ";
      current = current.next;
    }
    return str;
  }
  // 在position位置插入一个节点
  insert(position, data) {
    // 判断是否越界
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(data);

    if (position === 0) {
      // 如果是从第一个位置插入节点
      const current = this.head; // 保存当前的第一个节点
      this.head = node;
      node.next = current; // 让新的节点指向原来的第一个节点
    } else {
      let prev = null;
      let current = this.head;
      let index = 0;
      while (index < position) {
        index++;
        prev = current;
        current = current.next;
      }

      prev.next = node;
      node.next = current;
    }
    this.length += 1;
  }
  // 获取下标元素
  get(position) {
    // 判断是否越界
    if (position < 0 || position >= this.length) return null;

    let index = 0;
    let current = this.head;

    while (index < position) {
      index++;
      current = current.next;
    }
    return current.data;
  }
  // 获取元素位置
  indexOf(data) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return index;
      }
      index += 1;
      current = current.next;
    }

    return -1;
  }

  // 更新元素
  update(position, data) {
    if (position < 0 || position >= this.length) {
      return false;
    }

    let index = 0;
    let current = this.head;

    while (index < position) {
      index++;
      current = current.next;
    }

    current.data = data;
    return true;
  }

  // 根据位置删除元素

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let index = 0;
      let prev = null;

      while (index < position) {
        index++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.length -= 1;
    return current;
  }

  remove(data) {
    const i = this.indexOf(data);
    return this.removeAt(i);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

const link = new LinkedList();

link.append({ a: 132 });
link.append({ b: 456 });
link.append({ c: 789 });
link.append({ d: 656 });
link.insert(1, { e: 111 });
link.append("2222");

// console.log(link.toString());

// console.log(link.size());

// console.log(link.get(0));
// console.log(link.get(1));
// console.log(link.get(3));

console.log(link.indexOf("2222"));
