import { html } from "../lib.js";

const homeTemplate = () => html` <section id="hero">
  <h1>Accelerate Your Passion Unleash the Thrill of Sport Cars Together!</h1>
</section>`;

export function homeView(ctx) {
    ctx.render(homeTemplate())
}