import App from './App.svelte';
import 'https://unpkg.com/phosphor-icons';

const app = new App({
	target: document.body,
	props: {
		bgColor: '#ffeeb0',
	}
});

document.documentElement.style
	.setProperty('--bg-color', '#ffeeb0');

export default app;