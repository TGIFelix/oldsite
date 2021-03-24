import App from './App.svelte';
import 'https://unpkg.com/phosphor-icons';

const app = new App({
	target: document.body,
	props: {
		bgColor: '#00abe1',
	}
});

document.documentElement.style
	.setProperty('--bg-color', '#00abe1');

export default app;