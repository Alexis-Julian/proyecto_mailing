"use client";
import { useEffect, useState } from "react";
import TestimonialCard from "./Testimonial";
export default function CarrouselLogin() {
	useEffect(() => {
		const myWorker = new Worker("/js/my-worker.js");

		myWorker.postMessage(5);

		myWorker.onmessage = function (event) {
			setRotate(event.data);
		};

		return () => myWorker.terminate();
	}, []);

	const feedbacks = [
		{
			name: "Tania",
			job: "Frontend",
			feedback:
				"La aplicación es bastante fácil de usar. Me gusta la disposición limpia de las opciones y no tuve problemas.",
			img: "",
		},
		{
			name: "Carlos",
			job: "Desarrollador Full Stack",
			feedback:
				"La aplicación tiene una interfaz intuitiva y las funciones son fáciles de encontrar. Me ha facilitado mucho el trabajo.",
			img: "carlos.jpg",
		},
		{
			name: "Laura",
			job: "Diseñadora UX/UI",
			feedback:
				"La aplicación cuenta con un diseño atractivo y las opciones de personalización son muy útiles. ",
			img: "laura.jpg",
		},
		{
			name: "Alejandro",
			job: "Analista de Datos",
			feedback:
				"Me gusta la capacidad de seguimiento y análisis que ofrece la aplicación.",
			img: "alejandro.jpg",
		},
		{
			name: "Sofía",
			job: "Marketing Digital",
			feedback:
				"La aplicación ha simplificado nuestra gestión de listas y segmentación.",
			img: "sofia.jpg",
		},
	];

	const test = () => {
		console.log("pORNBADO");
	};

	const [rotate, setRotate] = useState("0");

	const CreateCarrousel = () => {
		const cantFeed = feedbacks.length;
		const part = 100 / cantFeed;
		const totalH = 100 * cantFeed;
		return (
			<div
				className={
					rotate
						? `w-full transition-all  duration-1000 flex flex-col flex-nowrap  translate-y-[-${rotate}%] h-[${totalH}%]`
						: null
				}
			>
				{feedbacks.map((feedback, index) => {
					return (
						<div key={index} className={"m-1 rounded-lg " + `h-[${part}%]`}>
							<TestimonialCard feedback={feedback} />
						</div>
					);
				})}
			</div>
		);
	};
	return CreateCarrousel();
}
