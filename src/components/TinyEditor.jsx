"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { Editor } from "@tinymce/tinymce-react";
import Contacts from "./Contacts";
import { Button } from "@material-tailwind/react";

import { auth as Auth } from "@/config/firebase-config";
import { signOut } from "firebase/auth";
import HistoryIcon from "@mui/icons-material/History";
import MessageIcon from "@mui/icons-material/Message";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { tinyMCEconfig } from "@/config/tinymce-config";
import { TableContacts } from "./TableContacts";

export default function TinyEditor({ data }) {
	const [isContactOpen, setIsContactOpen] = useState(true);
	const [Loading, setLoading] = useState(false);
	const [useSection, setSection] = useState(0);

	useEffect(() => {
		console.log(useSection);
	}, [useSection]);

	const initTinyMCE = () => {
		import("tinymce/tinymce.min").then((res) => {
			tinymce.init(tinyMCEconfig);
		});
	};

	/* 	useEffect(() => {
		initTinyMCE();
		return () => {
			tinymce.remove();
		};
	}, []); */

	const HandleToggleContacts = () => {
		setIsContactOpen(!isContactOpen);
	};

	const HandleSignOut = () => {
		signOut(Auth)
			.then((res) => {
				Cookies.remove("accessToken");
				location.reload();
			})
			.catch((err) => {
				console.log("Hubo un error paaa");
			});
	};
	const handleSubmit = () => {
		const content = tinymce.activeEditor.getContent();
		setLoading(true);

		fetch("http://localhost:3000/mailing", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ content }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Mensaje Enviado correcatamente:", data);
				// Respuestas del servidor
			})
			.catch((error) => {
				console.error("No se pudo enviar el mensaje:", error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const items = [
		<HomeIcon key="first" />,
		<MessageIcon key="second" />,
		<ContactMailIcon key="third" />,
		<HistoryIcon key="fourth" />,
	];

	const part = 100 / items.length;

	const handleTest = (index) => {
		console.log(index);
	};
	return (
		<>
			<div className="h-full w-full flex relative ">
				<div className="w-[10%]  h-full flex items-center justify-center  ">
					<div className="text-black h-[50%] w-[50%] rounded-full relative border-[2px]  border-[#99ddd0]   overflow-hidden">
						<div
							className="bg-[#2f76b4] absolute h-[25%] w-[100%]  duration-500  transition-all rounded-md  "
							style={{ transform: `translateY(${useSection.index * 100}%)` }}
						></div>
						<ul className="h-full w-full  bg-white rounded-full flex flex-col items-center justify-around ">
							{items.map((e, index) => {
								return (
									<li
										key={index}
										className={`z-50 cursor-pointer w-full h-[25%] flex items-center justify-center ${
											useSection.index == index && "text-white"
										}`}
										onClick={() => setSection({ item: part * index, index })}
									>
										<p className="">{e}</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="w-full h-full flex items-center justify-center  relative">
					<div className="h-[90%] w-[90%] bg-white rounded-md overflow-hidden">
						<div
							className=" duration-500 transition-all"
							style={{
								height: `${items.length * 100}%`,
								transform: `translateY(-${useSection.item}%)`,
							}}
						>
							<div className="text-black h-[25%] ">1</div>
							<div className="text-black h-[25%] ">2</div>
							<div className="text-black h-[25%]  ">
								<TableContacts data={data} />
							</div>
							<div className="text-black  h-[25%]">4</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
