"use client";
import Image from "next/image";
import { Input, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
export default function FormLogin() {
	return (
		<form className="grid p-2 gap-1 bg-white h-full rounded-lg w-[80%]  ">
			<h1 className=" font-semibold text-2xl flex items-center justify-center ">
				Sing up Hermes
			</h1>

			{/* Nombre y apellido */}
			<div className="flex flex-col justify-center gap-7 w-[90%] mx-auto">
				<Input variant="standard" label="Nombre" color="black" />
				<Input variant="standard" label="Apellido" />
				{/* Email */}
				<Input
					label="Correo Electronico"
					icon={<i className="fa-solid fa-envelope"></i>}
					color="black"
					variant="standard"
				/>
				{/* Password y confirmacion de contraseña */}
				<Input
					label="Contraseña"
					color="black"
					icon={<i className="fa-regular fa-eye"></i>}
					variant="standard"
				/>
				<Input
					label="Confirmar contraseña"
					color="black"
					icon={<i className="fa-regular fa-eye-slash"></i>}
					variant="standard"
				/>
			</div>

			<div className="flex items-center justify-center gap-4">
				<Button
					size="lg"
					variant="outlined"
					color="blue-gray"
					className="flex items-center gap-3"
				>
					<Image
						src="https://docs.material-tailwind.com/icons/google.svg"
						alt="metamask"
						height={24}
						width={24}
					/>
					Continue with Google
				</Button>
				<Button
					size="lg"
					variant="outlined"
					color="blue-gray"
					className="flex items-center gap-3"
				>
					<Image
						src="https://docs.material-tailwind.com/icons/google.svg"
						alt="metamask"
						height={24}
						width={24}
					/>
					Continue with Google
				</Button>
			</div>

			<div className="flex items-center justify-center">
				<Button color="blue" className="w-full">
					Registrase
				</Button>
			</div>
		</form>
	);
}
