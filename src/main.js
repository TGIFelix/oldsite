import App from './App.svelte';
import 'https://unpkg.com/phosphor-icons';

const app = new App({
	target: document.body,
	props: {
		bgColor: '#FFEEB0',
	}
});

document.documentElement.style
	.setProperty('--bg-color', '#FFEEB0');

export default app;