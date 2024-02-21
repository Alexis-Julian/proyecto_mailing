"use client";
import ButtonStyled from "./ButtonStyled";
import { CreateDate } from "@/utils/utills";
// import fs from "fs";

export default function CreateContact({ useContact, setContact }) {
	async function submitContact(contact) {
		const response = await fetch("http://localhost:3000/api/mailing", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(contact),
		});
		const data = await response.json();

		if (data.statusCode == 200) {
			const { data: contact } = data;
			useContact.push(contact);
			setContact(useContact);

			return data.statusCode;
		} else {
			return null;
		}
	}

	function handelSubmitForm(e) {
		e.preventDefault();
		const name = e.target["name"].value;
		const email = e.target["email"].value;
		const date = CreateDate();
		submitContact({ name, email, date });
	}

	return (
		<form className=" flex gap-4  items-center" onSubmit={handelSubmitForm}>
			<div>
				
				<input
					type="text"
					name="name"
					placeholder="Name"
					className="rounded-lg text-black text-sm "
				/>
			</div>
			<div>
				
				<input
					name="email"
					type="text"
					placeholder="Email"
					className="rounded-lg text-black text-sm "
				/>
			</div>
			<div>
				<ButtonStyled styles="text-sm text-[#8d939d] bg-white   hover:text-green-500 hover:border-green-500 focus:scale-110">
					Agregar
				</ButtonStyled>
			</div>
		</form>
	);
}
