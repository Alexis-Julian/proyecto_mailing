"use client";
import { ComplexNavbar } from "./NavBar";
import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import ListContacts from "./ListContacts";
import { ConstructionOutlined } from "@mui/icons-material";

/* function History() {
	return <div className=" h-full w-full">Hola</div>;
} */

export default function Mailing({ contacts }) {
	const [useText, setText] = useState(
		sessionStorage.getItem("message") ? sessionStorage.getItem("message") : ""
	);
	const [useContacts, setContacts] = useState([]);

	useEffect(() => {
		if (!useContacts) {
			setContacts(contacts);
		}
	}, [useContacts, contacts]);

	function handleChangeText(e) {
		setText(e.target.value);
		sessionStorage.setItem("message", e.target.value);
	}

	function handleSubmiText(e) {}

	return (
		<>
			<div className="h-[10%] backdrop-blur-md bg-white/50 rounded-lg "></div>
			<textarea
				value={useText}
				onChange={handleChangeText}
				className="text-black w-full h-[80%] resize-none"
			></textarea>
			<div className="h-[10%] w-full  pr-1   rounded-lg flex items-center justify-end ">
				<div className="flex gap-4 ">
					<button
						size="md"
						variant="outlined"
						className="p-2 px-4 border-[1px] border-black/25 rounded-lg w-full  text-black  font-semibold hover:text-blue-500 hover:border-blue-500 transition-all focus:scale-105 "
					>
						Destinatarios
					</button>
					<button
						size="md"
						variant="outlined"
						className="p-2 px-4 border-[1px] border-black/25 rounded-lg w-full  text-black  font-semibold hover:text-red-500 hover:border-red-500 transition-all focus:scale-105 "
					>
						Eliminar
					</button>
					<button
						size="md"
						variant="outlined"
						className="p-2 px-4 border-[1px] border-black/25 rounded-lg w-full text-black  font-semibold hover:text-green-500 hover:border-green-500 transition-all focus:scale-105"
						onClick={handleSubmiText}
					>
						Enviar
					</button>
				</div>
			</div>
			<div className="h-full w-full absolute p-4 bg-black/80 backdrop-blur-sm">
				<div className="h-full w-[50%] mx-auto p-4  bg-black/5  rounded-lg">
					<div className="bg-white h-full w-[60%] mx-auto rounded-md  text-black flex flex-col">
						<ul className="text-black">
							{useContacts.map(({ email }, index) => {
								return (
									<li key={index}>
										<p>{email}</p>
										<input type="checkbox" />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
