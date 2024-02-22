import { ComplexNavbar } from "@/components/NavBar";

export default function MailingLayout({ children }) {
	return (
		<div className="h-full w-full relative   overflow-hidden ">
			<header className="h-[10%] w-full  top-0 flex items-center justify-center">
				<ComplexNavbar />
			</header>
			<main className="h-[90%]">{children}</main>
			<div className="absolute top-0 bottom-0 h-full w-full -z-10 bg-[url('/svg/backgroundlontis.svg')] bg-cover bg-no-repeat blur-sm  "></div>
		</div>
	);
}
