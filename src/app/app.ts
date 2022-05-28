export class WebpackSeedApp {
  constructor() {
    const body = document.body as HTMLBodyElement;
    const textNode = document.createTextNode("Hello world!");
    const span = document.createElement("span");
    span.appendChild(textNode);
    body.appendChild(span);
  }
}
