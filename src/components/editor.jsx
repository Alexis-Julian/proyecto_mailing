// componentes EmailEditor.js
"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Estilos del editor

const EmailEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleAttachFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      alert(`Archivo adjuntado: ${file.name}`);
      setAttachment(file);
    }
  };

  const handleFontChange = (e) => {
    const font = e.target.value;
    document.execCommand('fontName', false, font);
  };

  const handleSendEmail = () => {
    // Implementar la lógica para enviar el correo electrónico aquí
    alert('Enviando correo electrónico con adjunto...');
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean'],
      [{ 'align': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['style', 'font', 'size'],
      [{ 'attachment': '' }], // Botón de adjuntar
      ['send'], // Botón de enviar
    ],
  };

  const formats = [
    'header', 'font', 'bold', 'italic', 'underline', 'strike', 'color', 'background',
    'list', 'bullet', 'link', 'image', 'script', 'blockquote', 'code-block', 'align',
    'indent', 'attachment', 'style', 'size', 'send'
  ];

  return (
    <div>
      <div id="toolbar">
        <select onChange={handleFontChange} className="ql-font">
          <option value="Arial">Arial</option>
          <option value="Arial Black">Arial Black</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Sans Serif">Sans Serif</option>
          <option value="Calibri">Calibri</option>
          {/* Agrega más opciones según sea necesario */}
        </select>
        <button onClick={handleAttachFile}>Adjuntar</button>
        <button onClick={handleSendEmail}>Enviar</button>
      </div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorHtml}
        onChange={setEditorHtml}
        placeholder="Escribe tu correo electrónico aquí..."
      />
    </div>
  );
};

export default EmailEditor;