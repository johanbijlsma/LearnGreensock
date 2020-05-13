import App from "./App.svelte";
// import { gsap } from "gsap";

const app = new App({
  target: document.body,
  props: {
    title: `Learning Greensock's GSAP`,
  },
  //  GS = gsap
});

// const GS = gsap({
//     GS(to(".example1", { duration: 1, x: 100 }));

// })

export default app;
