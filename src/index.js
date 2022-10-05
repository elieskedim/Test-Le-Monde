class Carousel {
  /**
   *
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.element = element;
    this.children = [].slice.call(element.children);
    this.root = this.createDivWithClass("carousel");
    let container = this.createDivWithClass("carousel__container");
    this.root.appendChild(container);
    this.element.appendChild(this.root);
    this.children.forEach((child) => {
      let item = this.createDivWithClass("carousel__item");
      item.appendChild(child);
      container.appendChild(item);
    });

    this.createNavigation();
  }

  /**
   *  @param {string} className
   *  @returns {HTMLElement}
   */
  createDivWithClass(className) {
    let div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }

  createNavigation() {
    let nextbutton = this.createDivWithClass("carousel__next");
    let prevbutton = this.createDivWithClass("carousel__prev");
    const btnCarouel = document.querySelector(".carousel__btn");

    prevbutton.classList.add("disabled");
    btnCarouel.appendChild(prevbutton);
    btnCarouel.appendChild(nextbutton);

    nextbutton.addEventListener("click", this.next);
    prevbutton.addEventListener("click", this.prev);
  }

  next() {
    document.querySelector(".carousel__container").style.transform =
      "translate3d(-9%, 0, 0)";
    this.classList.add("disabled");
    document.querySelector(".carousel__prev").classList.remove("disabled");
  }
  prev() {
    document.querySelector(".carousel__container").style.transform =
      "translate3d(0, 0, 0)";
    this.classList.add("disabled");
    document.querySelector(".carousel__next").classList.remove("disabled");
  }
}

//document.addEventListener("DOMContentLoaded", function () {
console.log("Elies");
const btn = document.getElementById("more");
const elems = document.getElementsByClassName("hide-mobile");
let arr = [].slice.call(elems);

btn.addEventListener("click", function () {
  for (let index = 0; index < elems.length + 1; index++) {
    arr[index].classList.remove("hide-mobile");
  }
  btn.classList.add("hide");
});

new Carousel(document.querySelector("#carousel"));
//});
