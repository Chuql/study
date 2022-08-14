import h from "./mysanbbdom/h";
import {
  init,
  classModule,
  styleModule,
  propsModule,
  eventListenersModule,
} from "snabbdom";

const myVnode = h("div", {}, [
  h("ul", {}, [
    h("li", {}, "嘻嘻"),
    h("li", {}, "呵呵"),
    h("li", {}, "哈哈哈哈"),
  ]),
]);

const patch = init([
  classModule,
  styleModule,
  propsModule,
  eventListenersModule,
]);

const app = document.getElementById("app");

patch(app, myVnode);

console.log(myVnode);
