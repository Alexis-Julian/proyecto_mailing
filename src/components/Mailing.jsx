"use client";
import { ComplexNavbar } from "./NavBar";
import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import ListContacts from "./ListContacts";
import { ConstructionOutlined, EighteenMp } from "@mui/icons-material";
import { ENDPOINT } from "@/shares/constants";

export default function Mailing({ contacts }) {
	const [useText, setText] = useState("");

	const [useContactSelected, setContactSelected] = useState([]);
	const [useContact, setContact] = useState(contacts);
	const [useHandlerMenu, setHandlerMenu] = useState(false);

	function ItemsContacts({ props }) {
		return (
			<li
				className={`p-1 py-4 border-b-2 border-black/30 rounded-sm cursor-pointer  ${props.active}`}
				onClick={handleSubmitContact}
			>
				{props.email}
			</li>
		);
	}

	function ShowContancts({ children, contacts }) {
		return (
			<div className=" h-full w-full  mx-auto  text-black flex flex-col ">
				<div className="p-4 bg-black/5 rounded-t-md text-center">
					{children}
				</div>
				<ul className="text-black overflow-y-auto">
					{contacts.map((props, index) => (
						<ItemsContacts props={props} key={index} />
					))}
				</ul>
			</div>
		);
	}

	function handleChangeText(e) {
		setText(e.target.value);
		sessionStorage.setItem("message", e.target.value);
	}

	async function handleSubmiText(e) {
		try {
			const response = await fetch(ENDPOINT + "/api/message", {
				headers: { "Content-Type": "application/json" },
				method: "POST",
				body: JSON.stringify({
					message: useText,
					emails: useContactSelected.map((e) => e.email),
					date: "21/2/2024",
				}),
			});
			const data = await response.json();
			console.log(data);
		} catch (e) {
			return null;
		}
	}

	function ShowContactSelected(e) {
		/* 	const active = "bg-green-300";
		const ElementClassList = Array.from(e.target.classList);

		if (ElementClassList.find((e) => e === active))
			return e.target.classList.remove(active);

		e.target.classList.add(active); */
	}

	function handleSubmitContact(e) {
		const contactEmail = e.target.innerHTML;
		const ElementArrayList = Array.from(e.target.classList);
		if (ElementArrayList.find((e) => e == "true")) {
			const updateContact = useContactSelected.filter(
				(prop) => prop.email != contactEmail
			);
			setContactSelected(updateContact);

			useContact.push({ email: contactEmail, active: false });
			const newArray = [...useContact];
			setContact(newArray);
		} else {
			const updateContact = useContact.filter(
				(prop) => prop.email != contactEmail
			);

			setContact(updateContact);

			/* Parte de agregacion  */
			useContactSelected.push({ email: contactEmail, active: true });

			const contactsSelected = [...useContactSelected];
			setContactSelected(contactsSelected);

			// e.target.classList.add("selected");
		}
	}

	return (
		<section className="h-full relative flex flex-col gap-2">
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
						onClick={() => setHandlerMenu(!useHandlerMenu)}
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
			<div
				className={`h-full w-full absolute  p-4   ${
					!useHandlerMenu && "hidden"
				}`}
			>
				<div className="h-full  relative mx-auto p-4 animate-fade-in  bg-black/50 backdrop-blur-lg  rounded-lg grid grid-cols-2 overflow-hidden">
					<div
						onClick={() => setHandlerMenu(!useHandlerMenu)}
						className="absolute text-xl bg-black/50 right-0 cursor-pointer m-4 p-4 h-[50px] w-[50px]  flex items-center justify-center rounded-full hover:text-red-500 transition-all "
					>
						X
					</div>
					<div className="w-[80%]  h-[55%] mx-auto  bg-white rounded-lg">
						<ShowContancts contacts={useContact}>
							Seleccione Contactos
						</ShowContancts>
					</div>
					<div className="w-[80%] h-[55%] mx-auto bg-white rounded-lg   ">
						<ShowContancts contacts={useContactSelected}>
							Contactos Seleccionados
						</ShowContancts>
					</div>
				</div>
			</div>
		</section>
	);
}
