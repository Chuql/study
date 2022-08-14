import vnode from "./vnode";
import createElement from "./createElement";

export default function patch(oldVode, newVnode) {
  // 如果oldVnode不是虚拟节点 则是一个真实的节点 则需要包装成为一个虚拟节点
  if (!oldVnode.sel) {
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      undefined,
      undefined,
      oldVnode
    );
  }

  // 判断新节点和老的节点是不是同一个节点
  if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
    // 如果新的节点和老的节点是同一个引用 则什么都不做
    if (oldVnode === newVnode) {
      return;
    }
    // 如果新的节点是一个文本节点 则直接替换
    if (newVnode.text && !newVnode.children?.length) {
      oldVnode.elm.innerText = newVnode.text;
    }
    {
      if (oldVnode.children?.length) {
      } else {
        oldVnode.innerHTML = "";
        newVndoe.children.forEach((child) => {
          const newElm = createElement(child);
          oldVnode.elm.appendChild(newElm);
        });
      }
    }
  } else {
    // 不是同一个节点则直接创建新的节点
    const newVnodeElm = createElement(newVnode);
    oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
    oldVnode.elm.parentNode.removeChild(oldVnode.elm);
  }
}
