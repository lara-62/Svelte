import App from './App.svelte';

import Looper from './Loop.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'Toriqe'
// 	}
// });

const app = new Looper({
	target: document.body,
	
});

export default app;