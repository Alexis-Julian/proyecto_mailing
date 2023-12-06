// my-worker.js

onmessage = function (event) {
	const data = event.data;

	const longitud = data;

	const frame = 100 / longitud;

	let inicio = 0;

	setInterval(() => {
		postMessage(inicio);
		inicio = inicio + frame;
		if (inicio == 100) {
			inicio = 0;
		}
	}, 3000);
};
