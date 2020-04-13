export const $ = window.$ = document.querySelector.bind(document);
export const $$ = window.$$ = document.querySelectorAll.bind(document);

export const bling = () => {
  Node.prototype.on = window.on = function (name, fn) {
    this.addEventListener(name, fn);
  };

  NodeList.prototype.__proto__ = Array.prototype;

  NodeList.prototype.on = function (name, fn) {
    this.forEach((elem, i) => {
      elem.on(name, fn);
    });
  };
};
