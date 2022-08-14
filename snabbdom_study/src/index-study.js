import {
  init,
  h,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
} from "snabbdom";

const patch = init([
  classModule,
  styleModule,
  propsModule,
  eventListenersModule,
]);

const myVnode = h("a", { props: { href: "//www.baidu.com" } }, "百度");

// console.log(myVnode);

// const a = document.createElement(myVnode.sel);
// Object.keys(myVnode.data.props).forEach((prop) => {
//   a.setAttribute(prop, myVnode.data.props[prop]);
// });
// a.innerText = myVnode.text
// document.body.appendChild(a);

const app = document.getElementById("app");
patch(app, myVnode);
