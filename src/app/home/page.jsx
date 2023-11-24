import Form from "@/components/Form";


import styles from "@/app/home/form.module.css";
export default async function HomePage() {
	const user = {
		name: "Pepole",
	};

	return (
		<>
			<div className="h-full w-full flex">
				<div className=" w-1/2 h-full flex items-center justify-center">
					<div className={styles.form}>
						<div className={styles.form_inputs}>
							<Form />
						</div>
						<div className={styles.form_blur}></div>
					</div>
				</div>
				<div className=" w-1/2 h-[80%] my-auto  flex  justify-center">
					<ul className="h-full flex flex-col  justify-around">
						<li className="text-lg text-center text-white font-extralight">
							🚀 ¿Quieres llevar tu estrategia de marketing al siguiente nivel?
							¡EnviMail Pro es la herramienta definitiva para el envío masivo de
							emails y la optimización de campañas!
						</li>
						<li className="text-lg text-center text-white font-extralight">
							📈 **Alcance Masivo:** Llega a miles de clientes potenciales con
							un solo clic. Amplía tu alcance y aumenta las conversiones con
							nuestro potente servicio de envío masivo.
						</li>
						<li className="text-lg text-center text-white font-extralight">
							🎯 **Segmentación Avanzada:** Personaliza tu mensaje para cada
							audiencia. Utiliza nuestra segmentación avanzada para enviar
							contenido relevante y aumentar la participación.
						</li>
						<li className="text-lg text-center text-white font-extralight">
							📊 **Analítica Detallada:** Obtén información valiosa sobre el
							rendimiento de tus campañas. Analiza tasas de apertura, clics y
							más para tomar decisiones informadas y mejorar continuamente.
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-[url('/svg/background_form.svg')] absolute bottom-0 right-0 top-0 left-0 bg-cover -scale-x-100 -z-10"></div>
		</>
	);
}
