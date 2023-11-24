import styles from "@/app/home/form.module.css";

export default function HomeRoot({ children }) {
	return (
		<html>
			<body className="h-screen w-screen">
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
					integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				{children}
				{/* <script src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"></script> */}
				<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
			</body>
		</html>
	);
}
