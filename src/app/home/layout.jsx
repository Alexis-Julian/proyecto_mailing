import Script from "next/script";
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
				<Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js" />
			</body>
		</html>
	);
}
