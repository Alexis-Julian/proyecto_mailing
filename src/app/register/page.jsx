import FormLogin from "@/components/FormLogin";

export default function HomeRegister() {
	return (
		<div className="h-full w-full overflow-hidden">
			<div className="h-full w-full flex items-center justify-center relative   ">
				<div className="h-[80%] w-[70%]  rounded-lg border-2 border-blue-300 grid grid-cols-2 grid-rows-1 relative">
					{/* Parte de login */}
					<div className="m-2 ">
						<FormLogin />
					</div>
					<div className="absolute bg-[#aaaa] blur-sm bottom-0 shadow-2xl shadow-blue-gray-300 right-0 left-0 top-0 -z-10"></div>
					{/* Parte de informacion */}
					<div className="bg-[url('/svg/email.svg')] bg-no-repeat bg-center m-2 "></div>
				</div>
				<div className="bg-[url('/svg/mailing.svg')] bg-cover absolute bottom-0 right-0 left-0 top-0 -z-10 blur-sm opacity-40 "></div>
			</div>
		</div>
	);
}
