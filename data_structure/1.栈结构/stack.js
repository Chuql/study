// 创建一个Stack类
class Stack {
  #items = [];
  constructor() {}
  // 将元素压入栈中
  push(element) {
    this.#items.push(element);
  }
  // 从栈顶删除元素
  pop() {
    return this.#items.pop();
  }
  // 查看栈顶元素
  peek() {
    return this.#items[this.#items.length - 1];
  }
  // 判断栈是否为空
  isEmpty() {
    return this.#items.length === 0;
  }
  // 获取栈的长度
  size() {
    return this.#items.length;
  }
  // 以字符串的形式输出
  toString() {
    return this.#items.reduce((res, item) => {
      res = `${res} ${JSON.stringify(item)}`;
      return res;
    }, "");
  }
}

const stack = new Stack();

stack.push(1);
stack.push("我是你爸爸");
stack.push({ obj: "哈哈哈" });

// console.log(stack.peek());
// console.log(stack.toString());

// 将10进制转换成为2进制
function dec2bin(decNumber) {
  const stack = new Stack();

  while (decNumber > 0) {
    stack.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }

  let res = "";
  while (!stack.isEmpty()) {
    res = res + stack.pop();
  }
  return res;
}

console.log(dec2bin(100));
console.log(dec2bin(10));
console.log(dec2bin(1000));
