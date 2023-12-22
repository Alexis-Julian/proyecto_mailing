"use client";
import React, { useEffect, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import Contacts from "./Contacts";
import { Button } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";

export default function TinyEditor() {
	/* const initTinyMCE = () => {
		import("tinymce/tinymce.min").then(() => {
			tinymce.init({
				selector: "textarea",
				apiKey: "z2tyrjc1n2vxhuglz0ntyla03pygryboent1p861ba2nkcvu",
				plugins: [
					"advlist autolink lists link image charmap print preview anchor",
					"searchreplace visualblocks code fullscreen",
					"insertdatetime media table paste code help wordcount",
					"uploadimage",
				],
				toolbar:
					"undo redo | formatselect | bold italic underline strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image media table code | help",
				images_upload_credentials: true,
				file_picker_types: "image",
			});
		});
	}; */

	const hermesMailing = () => {
		const content = tinymce.activeEditor.getContent();
		setEditorContent(content);
		console.log("Contenido a enviar:", content);
	};

	/* useEffect(() => {
		initTinyMCE();

		return () => {
			tinymce.remove();
		};
	}, []); */

	const [isContactOpen, setIsContactOpen] = useState(true);

	const HandleToggleContacts = () => {
		setIsContactOpen(!isContactOpen);
	};

	return (
		<>
			<div className="h-full w-full relative ">
				<IconButton
					className="rounded-full absolute left-0 z-10"
					onClick={HandleToggleContacts}
				>
					<i
						className={
							isContactOpen
								? "fa-solid fa-arrow-left transition-all "
								: "fa-solid fa-arrow-left rotate-180 transition-all"
						}
					></i>
				</IconButton>
				<div
					className={
						isContactOpen
							? "h-full scale-x-[100%] origin-left p-1 transition-all "
							: "h-full scale-x-[75%] origin-left p-1 transition-all "
					}
				>
					{/* <Editor
						initialValue="<p>Escribe tu contenido aquí.</p>"
						init={{
							height: 500,
							menubar: false,
							plugins: [
								"advlist autolink lists link image charmap print preview anchor",
								"searchreplace visualblocks code fullscreen",
								"insertdatetime media table paste code help wordcount",
								"uploadimage",
							],
							toolbar:
								"undo redo | formatselect | bold italic underline strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image media table code | help",
							images_upload_credentials: true,
							file_picker_types: "image",
							file_picker_callback: "handleFileUpload",
						}}
					/> */}

					{/* <Button size="sm" color="blue" className="hover:shadow-md">
						Enviar
					</Button> */}
				</div>
			</div>
			<Contacts isContactOpen={isContactOpen} />
		</>
	);
}
