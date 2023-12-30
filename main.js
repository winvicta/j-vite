import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1 class="text-nord0">Hello Vite!</h1>
    <h1 class="text-nord1">Hello Vite!</h1>
    <h1 class="text-nord2">Hello Vite!</h1>
    <h1 class="text-nord3">Hello Vite!</h1>
    <h1 class="text-nord4">Hello Vite!</h1>
    <h1 class="text-nord5">Hello Vite!</h1>
    <h1 class="text-nord6">Hello Vite!</h1>
    <h1 class="text-nord7">Hello Vite!</h1>
    <h1 class="text-nord8">Hello Vite!</h1>
    <h1 class="text-nord9">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
