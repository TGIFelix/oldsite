import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		bgColor: '#C6CCB6',
	}
});

document.documentElement.style
	.setProperty('--bg-color', '#C6CCB6');

export default app;