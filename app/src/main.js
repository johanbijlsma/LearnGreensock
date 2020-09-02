import App from "./App.svelte";

// import { gsap } from "gsap";

const svelte4 = new App({
  target: document.querySelector("svelte4"),
  props: {
    title: `Learning Greensock's GSAP`,
  },
});

export default svelte4;
