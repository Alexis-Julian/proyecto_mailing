// componentes EmailEditor.js
// "use client";
// import React, { useState, useRef } from "react";
// import ReactQuill, { Quill } from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Estilos del editor
// import "react-quill/dist/quill.bubble.css"; // Estilos del modo burbuja


// const EmailEditor = () => {
// 	const quillRef = useRef();
// 	const [editorHtml, setEditorHtml] = useState("");

// 	const handleSendEmail = () => {
// 		// Implementa la lógica para enviar el correo electrónico aquí
// 		console.log(editorHtml);
// 	};

// 	const handleFontChange = (e) => {
// 		const font = e.target.value;

// 		// Aplica estilos de fuente al texto seleccionado
// 		const range = quillRef.current.getEditor().getSelection();
// 		if (range) {
// 			console.log(Quill);
// 			quillRef.current.getEditor().format("font", font);
// 		}
// 	};

// 	const fonts = [
// 		"Arial",
// 		"Times New Roman",
// 		"Courier New",
// 		"Georgia",
// 		"Verdana",
// 		"Helvetica",
// 		"Tahoma",
// 		"Trebuchet MS",
// 		"Palatino",
// 		"Garamond",
// 	];

// 	const modules = {
// 		toolbar: [
// 			[{ header: "1" }, { header: "2" }],
// 			["bold", "italic", "underline", "strike"],
// 			[{ color: [] }, { background: [] }],
// 			["blockquote", "code-block"],
// 			[{ list: "ordered" }, { list: "bullet" }],
// 			["link", "image"],
// 			["clean"],
// 			[{ align: [] }],
// 			[{ script: "sub" }, { script: "super" }],
// 			[{ indent: "-1" }, { indent: "+1" }],
// 			["font", "size", "style"],
// 			[{ attachment: "" }], // Botón de adjuntar
// 			["send"], // Botón de enviar
// 		],
// 	};

// 	const formats = [
// 		"header",
// 		"font",
// 		"bold",
// 		"italic",
// 		"underline",
// 		"strike",
// 		"color",
// 		"background",
// 		"list",
// 		"bullet",
// 		"link",
// 		"image",
// 		"script",
// 		"blockquote",
// 		"code-block",
// 		"align",
// 		"indent",
// 		"attachment",
// 		"style",
// 		"size",
// 		"send",
// 	];

// 	return (
// 		<div className="mx-auto max-w-2xl mt-8 p-4  rounded shadow  h-3/4 bg-black">
// 			<ReactQuill

// 				theme="snow"
// 				modules={modules}
// 				formats={formats}
// 				value={editorHtml}
// 				onChange={setEditorHtml}
// 				placeholder="Escribe tu correo electrónico aquí..."
// 				className="bg-gray-100 p-4 rounded mb-4 max-h-[500px] overflow-auto "
// 				//style={{ maxHeight: "80%" }} // Ajusta la altura según sea necesario
// 				ref={quillRef}
// 			/>
// 			<div className="flex items-center space-x-4">
// 				<select
// 					onChange={handleFontChange}
// 					className="bg-gray-200 text-gray-700 px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
// 				>
// 					<option value="">Fuente por defecto</option>
// 					{fonts.map((font, index) => (
// 						<option key={index} value={font}>
// 							{font}
// 						</option>
// 					))}
// 				</select>
// 				<button
// 					onClick={handleSendEmail}
// 					className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
// 				>
// 					Enviar Correo
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default EmailEditor;

"use client"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Toolbar from './Toolbar'; 

// Inicializa el módulo personalizado
Toolbar(ReactQuill.Quill);

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'align': [] }],
    ['link', 'image', 'video'],
    ['blockquote', 'code-block'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['clean'],
    ['font'],
    ['color', 'background'],
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'color', 'background',
];

const Editor = ({ value, onChange }) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default Editor;