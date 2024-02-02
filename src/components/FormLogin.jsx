"use client";
import Image from "next/image";
import { Input, Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import PopoverWithDescription from "./PopoverWithDescription";
import { ENDPOINT } from "@/shares/constants";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function FormLogin() {
	const [useToken, setToken] = useState("");

	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		if (useToken) {
			Cookies.set("accessToken", useToken, { expires: 1, path: "/" });
			router.push("/mailing");
		}
	}, [useToken, router]);

	useEffect(() => {
		if (Cookies.get("accessToken")) {
			router.push("/mailing");
		}
	}, [router]);

	const registerWithHermes = async (body) => {
		const response = await fetch(ENDPOINT + "api/auth/register", {
			headers: { "content-type": "application/json" },
			method: "POST",
			body: JSON.stringify(body),
		});

		const data = await response.json();
		console.log(data);
		if (data.statusCode == 201) {
			setToken(data.data);
		} else {
			console.log("Problem in fetch request");
		}
	};
	return (
		<form
			onSubmit={handleSubmit(registerWithHermes)}
			className="grid p-2 gap-1 bg-white h-full rounded-lg w-[80%]  "
		>
			<h1 className=" font-semibold text-2xl flex items-center justify-center ">
				Sing up Hermes
			</h1>

			{/* Nombre y apellido */}
			<div className="flex flex-col justify-center gap-7 w-[90%] mx-auto">
				<Input
					{...register("name", {
						required: {
							value: true,
							message: "El nombre no puede estar vacio",
						},
					})}
					variant="standard"
					label="Nombre"
					color="black"
					icon={
						errors.name && (
							<PopoverWithDescription
								icon={
									<i class="fa-solid fa-circle-exclamation text-red-400"></i>
								}
								message={errors.name.message}
							/>
						)
					}
				/>

				<Input
					{...register("lastname", {
						required: {
							value: true,
							message: "El apellido no puede estar vacio",
						},
					})}
					color="black"
					variant="standard"
					label="Apellido"
					icon={
						errors.lastname && (
							<PopoverWithDescription
								icon={
									<i class="fa-solid fa-circle-exclamation text-red-400"></i>
								}
								message={errors.lastname.message}
							/>
						)
					}
				/>
				{/* Email */}
				<Input
					{...register("email")}
					label="Correo Electronico"
					icon={<i className="fa-solid fa-envelope"></i>}
					color="black"
					variant="standard"
				/>
				{/* Password y confirmacion de contraseña */}
				<Input
					{...register("password")}
					label="Contraseña"
					color="black"
					icon={<i className="fa-regular fa-eye"></i>}
					variant="standard"
				/>
				<Input
					{...register("repeatpassword")}
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
				<Button color="blue" className="w-full" type="submit">
					Registrase
				</Button>
			</div>
		</form>
	);
}
