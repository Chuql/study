import h from "./mysanbbdom/h";
import patch from "./mysanbbdom/patch";

const app = document.getElementById("app");
const btn = document.getElementById("btn");

const myVnode = h("h1", {}, "你好");
// const myVnode2 = h("div", {}, "hhhhhhhh");

const myVnode2 = h("ul", {}, [
  h("li", {}, "哈哈"),
  h("li", {}, "嘻嘻"),
  h("li", {}, "呵呵"),
  h("li", {}, [
    h("p", {}, "woshiyige p"),
    h("p", {}, "ya "),
    h("p", {}, "hhhhh"),
  ]),
]);

patch(app, myVnode);

btn.onclick = function () {
  patch(myVnode, myVnode2);
};
