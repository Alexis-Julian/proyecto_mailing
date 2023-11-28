"use client";
import { Carousel, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function CarouselCustomArrows() {
	const [rotate, setRotate] = useState("0");

	useEffect(() => {
		//Crea una instancia del Web Worker
		const myWorker = new Worker("/js/my-worker.js");

		//Enviar un mensaje al worker
		myWorker.postMessage(4);

		//Manejar mensaje recibidos del worker
		myWorker.onmessage = function (event) {
			console.log("Resultado recibido del worker:", event.data);

			setRotate(event.data);
		};

		// Limpiar el worker cuando el componente se desmonta
		return () => myWorker.terminate();
	}, []);

	return (
		<div className="h-screen w-screen bg-cyan-300 flex items-center justify-center">
			<div className="bg-white h-40 w-[600px] border-2 border-black  ">
				<div
					className={
						"w-[400%]  transition-all  h-full flex " +
						`translate-x-[-${rotate}%]`
					}
					id="container"
				>
					<div className="w-full bg-red-500 h-full"></div>
					<div className="w-full bg-lime-600 h-full "></div>
					<div className="w-full bg-purple-500 h-full "></div>
					<div className="w-full bg-pink-500 h-full "></div>
				</div>
			</div>
		</div>
	);
}
