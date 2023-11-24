import Form from "@/components/Form";

import styles from "@/app/home/form.module.css";
export default async function HomePage() {
	const user = {
		name: "Pepole",
	};

	return (
		<div className={styles.container}>
			<div className={styles.container_screenLeft}>
				<div className={styles.form}>
					<div className={styles.form_inputs}>
						<Form />
					</div>
					<div className={styles.form_blur}></div>
				</div>
			</div>
			<div className={styles.background}></div>
		</div>
	);
}
