import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: `Learning Greensock's GSAP`,
	},
});

export default app;
