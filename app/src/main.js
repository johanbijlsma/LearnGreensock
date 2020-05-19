import App from "./App.svelte";

// import { gsap } from "gsap";

const app = new App({
  target: document.body,
  props: {
    title: `Learning Greensock's GSAP`,
  },
});

export default app;
