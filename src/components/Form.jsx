"use client";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Image from "next/image";

import {
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	GithubAuthProvider,
	signInWithEmailAndPassword,
} from "firebase/auth";

import { auth as Auth } from "@/config/firebase-config";
import { useEffect, useState } from "react";

export default function Form() {
	const [token, setToken] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// window.localStorage.getItem("auth") === "true"

	useEffect(() => {
		if (token) {
		}
	}, [token]);

	useEffect(() => {
		onAuthStateChanged(Auth, (usercred) => {
			if (usercred) {
				// window.localStorage.setItem("auth", "true");
				usercred.getIdToken().then((tok) => {
					setToken(tok);
				});
			}
		});
	}, []);

	const loginWithGoogle = () => {
		signInWithPopup(Auth, new GoogleAuthProvider())
			.then((usercred) => {
				// window.localStorage.setItem("auth", "true");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const loginWithGitHub = () => {
		signInWithPopup(Auth, new GithubAuthProvider())
			.then((usercred) => {
				// window.localStorage.setItem("auth", "true");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const loginWithHermes = async ({ email, password }) => {
		const response = await signInWithEmailAndPassword(Auth, email, password);
		console.log(response);
	};

	return (
		<form className="h-full" onSubmit={handleSubmit(loginWithHermes)}>
			<div className="h-[10%] flex items-end justify-center  text-2xl text-black relative">
				<h1 className="font-semibold border-b border-black">Hermes</h1>
				<Image
					src="/svg/iconproject.svg"
					className="h-full"
					height={40}
					width={40}
					alt=""
				/>
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
					<p className="text-blue-600 cursor-pointer hover:text-blue-800">
						Desea registrarse?{" "}
					</p>
				</div>
				<div className="flex items-start justify-center w-[90%] mx-auto gap-3">
					<Button
						size="lg"
						variant="gradient"
						color="gray"
						className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
						onClick={loginWithGitHub}
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
						onClick={loginWithGoogle}
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
						type="submit"
					>
						Enviar
					</Button>
				</div>
			</div>
		</form>
	);
}
