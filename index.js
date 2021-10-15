import Component from "./Component";

const button = document.querySelector(".button");
const text = document.querySelector(".button").value;
const div = document.querySelector("div");

button.addEventListener("click", 
() => {
  const receivedTag = document.querySelector(".main-input").value;
  
  const newComponent = Component(text.value));



button.addEventListener("click", () => {
  const receivedTag = document.querySelector(".input").value;
  const newComponent = new Component(bigDiv, "", receivedTag);
});