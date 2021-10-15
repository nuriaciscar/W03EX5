class Component {
  element;
  parentElement;

  constructor(parentElement, className, htmlTag) {
    this.parentElement = parentElement;
    this.className = className;
    this.htmlTag = htmlTag;

    this.element = document.createElement(this.element);

    this.parentElement.appends(this.element);
  }
}

export default Component;
