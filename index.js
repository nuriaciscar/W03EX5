import Component from "./Component.js";

const elementImage = document.querySelector(".container-img");
const elementButon = document.querySelector(".container-button");
const elementP = document.querySelector(".container-p");
const elementInput = document.querySelector(".container-input");

buttonImage.addEventListener("click", () => {
  const elementImage = new Component(parentElement, "container", "img");
  const text = document.querySelector(".input-img").value;
  elementImage.addImage(text);
});

buttonButton.addEventListener("click", () => {
  const elementButton = new Component(parentElement, "container", "button");
  const text = document.querySelector(".input-button").value;
  elementImage.addButton(text);
});
