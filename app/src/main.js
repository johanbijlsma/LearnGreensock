import App from "./App.svelte";

// import { gsap } from "gsap";

const svelte5 = new App({
  target: document.querySelector("svelte5"),
  props: {
    title: `Learning Greensock's GSAP`,
  },
});

export default svelte5;
