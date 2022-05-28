import { WebpackSeedApp } from "./app/app";

function bootstrap() {
  new WebpackSeedApp();
}

document.addEventListener("DOMContentLoaded", bootstrap);
