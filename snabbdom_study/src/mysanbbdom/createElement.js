export default function createElement(vnode) {
  const el = document.createElement(vnode.sel);

  // 文本节点
  if (vnode.text && !vnode.children?.length) {
    el.innerText = vnode.text;
  } else if (vnode.children?.length) {
    // 有子元素节点
    const children = vnode.children;
    children.forEach((child) => {
      const chElm = createElement(child);
      el.appendChild(chElm);
    });
  }

  vnode.elm = el;

  return el;
}
