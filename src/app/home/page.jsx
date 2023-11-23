import Form from "@/components/Form";


import styles from "@/app/home/form.module.css";
export default async function HomePage() {
	const user = {
		name: "Pepole",
	};

	return (
		<div className={styles.container}>
			<div className={styles.container_screenLeft}>
				<form className={styles.form}>
					<div className={styles.form_inputs}></div>
					<div className={styles.form_blur}></div>
				</form>
			</div>
			<div className={styles.background}></div>
		</div>
	);
}
