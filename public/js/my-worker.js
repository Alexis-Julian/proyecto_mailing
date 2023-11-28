// my-worker.js

onmessage = function (event) {
	const data = event.data;
	console.log("Mensaje recibido en el worker:", data);

	// Realiza algún trabajo en el worker
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