import Form from "@/components/Form";

import styles from "@/app/home/form.module.css";
import CarrouselLogin from "@/components/CarrouselLogin";
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
				<div className=" w-1/2 h-[100%] my-auto  grid  grid-rows-2">
					<div className=""></div>
					<div className="flex items-center justify-center">
						<div className="overflow-hidden h-1/2 w-1/3 rounded-lg shadow-lg shadow-black relative border-[#9f9f9f] border-2 outline  outline-[#0068ad] outline-offset-2 ">
							<CarrouselLogin />
							<div className="absolute top-0 left-0 right-0 bottom-0 bg-[#bcbcbc] blur-2xl -z-[1]  "></div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[url('/svg/background_form.svg')] absolute bottom-0 right-0 top-0 left-0 bg-cover -scale-x-100 -z-10"></div>
		</>
	);
}
