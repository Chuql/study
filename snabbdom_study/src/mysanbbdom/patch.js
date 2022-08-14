import vnode from "./vnode";
import createElement from "./createElement";
import { array } from "snabbdom";

export default function patch(oldVnode, newVnode) {
  // 如果oldVnode不是虚拟节点 则是真实的节点
  if (!oldVnode.sel) {
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      undefined,
      undefined,
      oldVnode
    );
  }

  // 判断是不是同一个节点
  if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
    // 老节点和新节点是同一个节点 什么都不做
    if (oldVnode === newVnode) {
      return;
    }

    // 新节点是一个文本节点则直接替换
    if (newVnode.text && !newVnode.children?.length) {
      oldVnode.elm.innerText = newVnode.text;
    } else {
      if (oldVnode.children?.length) {
        // 新节点和老节点都存在children
      } else {
        // 老节点是一个文本节点
        // 删除老节点的文本
        oldVnode.elm.innerHtml = "";
        newVnode.children.forEach((child) => {
          const newElm = createElement(child);
          oldVnode.elm.appendChild(newElm);
        });
      }
    }
    console.log("是同一个节点");
  } else {
    console.log("不是同一个节点");
    // 不是同一个节点则创建新的节点
    const newVnodeElm = createElement(newVnode);
    oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
