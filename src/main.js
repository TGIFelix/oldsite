import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		bgColor: '#fcb183',
	}
});

document.documentElement.style
	.setProperty('--bg-color', '#fcb183');

export default app;