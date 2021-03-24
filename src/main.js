import App from './App.svelte';
import 'https://unpkg.com/phosphor-icons';

const app = new App({
	target: document.body,
	props: {
		bgColor: '#1fc58e',
	}
});

document.documentElement.style
	.setProperty('--bg-color', '#1fc58e');

export default app;