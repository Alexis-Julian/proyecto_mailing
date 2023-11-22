import styles from "@/app/home/form.module.css";

export default function HomeRoot({ children }) {
	return (
		<html>
			<body className={styles.body}>{children}</body>
		</html>
	);
}
