"use client";
import React, { useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

// Componente del editor de texto
const TextEditor = () => {
  // Función de inicialización de TinyMCE
  const initTinyMCE = () => {
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
  };

  useEffect(() => {
    // Inicializa TinyMCE cuando el componente se monta
    initTinyMCE();

    // Limpieza al desmontar el componente para no cargar la memoria
    return () => {
      tinymce.remove();
    };
  }, []); // El segundo parámetro [] asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div>
      <Editor
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
      />
      <button>Enviar</button>
    </div>
  );
};

export default TextEditor;
