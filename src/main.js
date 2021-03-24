import App from './App.svelte';
import 'https://unpkg.com/phosphor-icons';

const app = new App({
	target: document.body,
	props: {
		bgColor: '#B8CCCF',
	}
});

document.documentElement.style
	.setProperty('--bg-color', '#B8CCCF');

export default app;