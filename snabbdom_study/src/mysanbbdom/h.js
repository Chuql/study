import vnode from "./vnode";

export default function h(sel, data, c) {
  if (arguments.length !== 3) {
    throw new Error("参数必须是3个");
  }

  if (typeof c === "string" || typeof c === "number") {
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    const children = c.reduce((prev, next) => {
      if (typeof next !== "object" || !next || !next.hasOwnProperty("sel")) {
        throw new Error("参数错误");
      }
      prev.push(next);
      return prev;
    }, []);

    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c === "object" && c && c.hasOwnProperty("sel")) {
    const children = [c];
    return vnode(sel, data, children, undefined, undefined);
  } else {
    throw new Error("第三个参数格式错误");
  }
}
