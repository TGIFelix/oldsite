import App from './App.svelte';
import 'https://unpkg.com/phosphor-icons';

const app = new App({
	target: document.body,
	props: {
		bgColor: '#E79C85',
	}
});

document.documentElement.style
	.setProperty('--bg-color', '#E79C85');

export default app;