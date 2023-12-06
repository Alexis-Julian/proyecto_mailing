// componentes EmailEditor.js
"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Estilos del editor
import "react-quill/dist/quill.bubble.css"; // Estilos del modo burbuja

const EmailEditor = () => {
	const [editorHtml, setEditorHtml] = useState("");

	const handleSendEmail = () => {
		// Implementa la lógica para enviar el correo electrónico aquí
		console.log(editorHtml);
	};

	const handleFontChange = (e) => {
		const font = e.target.value;

		// Aplica estilos de fuente al texto seleccionado
		const range = quillRef.getEditor().getSelection();
		if (range) {
			quillRef.getEditor().format("font", font);
		}
	};

	const fonts = [
		"Arial",
		"Times New Roman",
		"Courier New",
		"Georgia",
		"Verdana",
		"Helvetica",
		"Tahoma",
		"Trebuchet MS",
		"Palatino",
		"Garamond",
	];

	const modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }],
			["bold", "italic", "underline", "strike"],
			[{ color: [] }, { background: [] }],
			["blockquote", "code-block"],
			[{ list: "ordered" }, { list: "bullet" }],
			["link", "image"],
			["clean"],
			[{ align: [] }],
			[{ script: "sub" }, { script: "super" }],
			[{ indent: "-1" }, { indent: "+1" }],
			["font", "size", "style"],
			[{ attachment: "" }], // Botón de adjuntar
			["send"], // Botón de enviar
		],
	};

	const formats = [
		"header",
		"font",
		"bold",
		"italic",
		"underline",
		"strike",
		"color",
		"background",
		"list",
		"bullet",
		"link",
		"image",
		"script",
		"blockquote",
		"code-block",
		"align",
		"indent",
		"attachment",
		"style",
		"size",
		"send",
	];

	let quillRef;

	return (
		<div className="mx-auto max-w-2xl mt-8 p-4  rounded shadow  h-3/4 bg-black">
			<ReactQuill
				theme="snow"
				modules={modules}
				formats={formats}
				value={editorHtml}
				onChange={setEditorHtml}
				placeholder="Escribe tu correo electrónico aquí..."
				className="bg-gray-100 p-4 rounded mb-4 max-h-[500px] overflow-auto "
				//style={{ maxHeight: "80%" }} // Ajusta la altura según sea necesario
				ref={(el) => (quillRef = el)}
			/>
			<div className="flex items-center space-x-4">
				<select
					onChange={handleFontChange}
					className="bg-gray-200 text-gray-700 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
				>
					<option value="">Fuente por defecto</option>
					{fonts.map((font, index) => (
						<option key={index} value={font}>
							{font}
						</option>
					))}
				</select>
				<button
					onClick={handleSendEmail}
					className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
				>
					Enviar Correo
				</button>
			</div>
		</div>
	);
};

export default EmailEditor;
