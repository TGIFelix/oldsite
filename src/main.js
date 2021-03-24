import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		bgColor: '#B8CCCF',
	}
});

document.documentElement.style
	.setProperty('--bg-color', '#B8CCCF');

export default app;