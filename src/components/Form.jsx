"use client";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ENDPOINT } from "@/shares/constants";
import { useEffect, useState } from "react";

export default function Form({ probando }) {
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

	const loginWithHermes = async ({ email, password }) => {
		const response = await fetch(ENDPOINT + "api/auth/login", {
			headers: { "content-type": "application/json" },
			method: "POST",
			body: JSON.stringify({ email, password }),
		});

		const result = await response.json();

		if (result.statusCode == 200) {
			setToken(result.data);
		}

		/* console.log(body);
		const response = await fetch(ENDPOINT + "api/auth/login", {
			headers: { "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify(body),
		});

		console.log(result);

		if (result.statusCode === 200) {
			setToken(result.data);
			router.push("/mailing");
		} else {
			// Muestra alerta en caso de error
			if (typeof window !== "undefined") {
				if (result.errorField === "email") {
					alertify.error("Correo incorrecto. Verifique su correo electrónico.");
				} else if (result.errorField === "password") {
					alertify.error("Contraseña incorrecta. Verifique su contraseña.");
				} else {
					alertify.error(
						"Credenciales incorrectas. Verifique su correo y contraseña."
					);
				}
			}
		} */
	};

	// const loginWithHermes = async (body) => {
	// 	const response = await fetch(ENDPOINT + "api/auth/login", {
	// 		headers: { "Content-Type": "application/json" },
	// 		method: "POST",
	// 		body: JSON.stringify(body),
	// 	});

	// 	const result = await response.json();
	// 	console.log(result);
	// 	if (result.statusCode == 200) {
	// 		setToken(result.data);

	// 		router.push("/mailing");
	// 	}
	// };

	return (
		<form className="h-full" onSubmit={handleSubmit(loginWithHermes)}>
			<div className="h-[10%] flex items-end justify-center  text-2xl text-black relative">
				<h1 className="font-semibold border-b border-black">Hermes</h1>
			</div>
			<div className="flex flex-col justify-evenly gap-6 h-[45%] w-[90%] mx-auto   ">
				<div className="relative">
					<Input
						{...register("email", {
							required: {
								value: true,
								message: "El correo es requerido",
							},
							pattern: {
								value:
									/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
								message: "Correo no valido",
							},
						})}
						variant="static"
						label="Email"
						color="black"
						autoComplete="off"
					/>
					<div className="flex items-center absolute -left-3">
						<Checkbox defaultChecked />
						<p>Recordar</p>
					</div>
					{errors.email && (
						<span className="absolute -bottom-9 right-0 text-black font-normal">
							{errors.email.message}
						</span>
					)}
				</div>
				<div className="relative">
					<Input
						{...register("password", {
							required: { value: true, message: "La contraseña es requerida" },
							minLength: {
								value: 6,
								message: "No cumple con los requisitos",
							},
						})}
						variant="static"
						label="Password"
						color="black"
						autoComplete="off"
					/>
					<div className="flex items-center absolute -left-3">
						<Checkbox defaultChecked />
						<p>Ocultar</p>
					</div>
					{errors.password && (
						<span className="absolute -bottom-9 right-0 text-black font-normal">
							{errors.password.message}
						</span>
					)}
				</div>
			</div>
			<div className="h-[45%] flex flex-col justify-evenly ">
				<div className="flex justify-around">
					<p className="text-blue-600 cursor-pointer hover:text-blue-800">
						Olvido su contraseña?{" "}
					</p>
					<p
						className="text-blue-600 cursor-pointer hover:text-blue-800"
						onClick={() => router.push("/register")}
					>
						Desea registrarse?{" "}
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-3">
					<Button
						size="lg"
						variant="gradient"
						color="gray"
						className="group relative text-xs justify-center w-full flex items-center gap-3 overflow-hidden pl-2 pr-[50px] max-w-[300px]"
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
						className="group relative text-xs justify-center w-full flex items-center gap-3 overflow-hidden pl-2 pr-[50px] max-w-[300px]"
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
				<div className="w-full max-w-[300px] mx-auto">
					<Button
						variant="gradient"
						className="rounded-full w-full"
						color="blue"
						type="submit"
					>
						Enviar
					</Button>
				</div>
			</div>
		</form>
	);
}
