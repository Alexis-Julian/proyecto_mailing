"use client";
import CreateContact from "./CreateContact";
import ListContacts from "./ListContacts";
import { useEffect, useState } from "react";

export default function Contacts({ data: contacts }) {
	const [useContacts, setContact] = useState(contacts);

	return (
		<div className="w-[80%] flex flex-col h-[90%] gap-4   ">
			<section className="max-h-[100%]">
				<ListContacts data={useContacts} />
			</section>
			<section className="flex justify-end ">
				<CreateContact setContact={setContact} useContact={useContacts} />
			</section>
		</div>
	);
}
