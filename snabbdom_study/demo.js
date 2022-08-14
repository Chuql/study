import {
  init,
  h,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
} from "sanbbdom";

const patch = init([
  classModule,
  styleModule,
  propsModule,
  eventListenersModule,
]);

const myVnode = h("a", { props: { href: "//www.baidu.com" } }, "baidu");

const app = document.getElementById("app");

patch(app, myVnode);
