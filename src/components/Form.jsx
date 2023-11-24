"use client";
import { Button, IconButton, Input, Checkbox } from "@material-tailwind/react";
import Image from "next/image";
export default function Form() {
	return (
		<form className="h-full ">
			<div className="h-[10%] flex items-end justify-center  text-2xl text-black">
				<h1>Iniciar Sesion</h1>
			</div>
			<div className="flex flex-col justify-evenly gap-6 h-[45%] w-[90%] mx-auto   ">
				<div className="relative">
					<Input variant="static" label="Email" color="black" />
					<div className="flex items-center absolute -left-3">
						<Checkbox defaultChecked />
						<p>Recordar</p>
					</div>
				</div>
				<div className="relative">
					<Input variant="static" label="Password" color="black" />
					<div className="flex items-center absolute -left-3">
						<Checkbox defaultChecked />
						<p>Ocultar</p>
					</div>
				</div>
			</div>
			<div className="h-[45%] flex flex-col justify-evenly ">
				<div className="flex justify-around">
					<p className="text-blue-700">Olvido su contraseña? </p>
					<p className="text-blue-700">Desea registrarse? </p>
				</div>
				<div className="flex items-start justify-center w-[90%] mx-auto gap-3">
					<Button
						size="lg"
						variant="gradient"
						color="gray"
						className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
					>
						Inicie sesion con GitHub
						<span className="absolute right-0 grid h-full w-12 place-items-center bg-gray-700 transition-colors group-hover:bg-gray-600">
							<Image
								src="/image/github.png"
								alt="metamask"
								width={26}
								height={26}
							/>
						</span>
					</Button>
					<Button
						size="lg"
						variant="gradient"
						color="white"
						className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
					>
						Inicie sesion con Google
						<span className="absolute right-0 grid h-full w-12 place-items-center bg-[#F1FCFC] transition-colors group-hover:bg-[#EBF5F5]">
							<Image
								src="https://docs.material-tailwind.com/icons/google.svg"
								alt="metamask"
								width={24}
								height={24}
							/>
						</span>
					</Button>
				</div>
				<div className="w-[90%] mx-auto">
					<Button
						variant="gradient"
						className="rounded-full w-full"
						color="blue"
					>
						Enviar
					</Button>
				</div>
			</div>
		</form>
	);
}
