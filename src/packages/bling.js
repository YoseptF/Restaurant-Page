window.$ = document.querySelector.bind(document);
export const { $ } = window;
window.$$ = document.querySelectorAll.bind(document);
export const { $$ } = window;

export const bling = () => {
  window.on = function onFun(name, fn) {
    this.addEventListener(name, fn);
  };
  Node.prototype.on = window.on;

  Object.setPrototypeOf(NodeList, Array.prototype);

  NodeList.prototype.on = function onfun(name, fn) {
    this.forEach((elem) => {
      elem.on(name, fn);
    });
  };
};
