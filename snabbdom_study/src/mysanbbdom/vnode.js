export default function vnode(sel, data, children, text, elm) {
  const key = typeof data === "object" && data ? data.key : undefined;
  return { sel, data, children, text, elm, key };
}
