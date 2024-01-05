"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { Editor } from "@tinymce/tinymce-react";
import Contacts from "./Contacts";
import { Button } from "@material-tailwind/react";

import { auth as Auth } from "@/config/firebase-config";
import { signOut } from "firebase/auth";

import { IconButton } from "@material-tailwind/react";
import { tinyMCEconfig } from "@/config/tinymce-config";
import CustomSpinner from "./CustomSpinner";
import { XMarkIcon } from "@heroicons/react/24/outline";


export default function TinyEditor() {
	const [isContactOpen, setIsContactOpen] = useState(true);
	const [Loading, setLoading] = useState(false);
	
	
	
	
	const initTinyMCE = () => {
		import("tinymce/tinymce.min").then((res) => {
			tinymce.init(tinyMCEconfig);
		});
	};
	
	useEffect(() => {
		initTinyMCE();
		return () => {
			tinymce.remove();
		};
	}, []);
	
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


  return (
    <>
      <div className={`h-full ${!isContactOpen ? "w-[85%]" : "w-full"} relative duration-150`}>
        <div className="absolute z-10 top-4 left-4 flex gap-3">
          <Button color="blue" className="flex gap-2 items-center rounded-md text-white px-4 py-2" onClick={HandleToggleContacts}>
		        <span className="hidden sm:inline">Destinatarios</span>
            <i
              className={
                isContactOpen
                  ? "fa-solid fa-arrow-left transition-all "
                  : "fa-solid fa-arrow-left rotate-180 transition-all"
              }
            ></i>
          </Button>
          <Button color="red" className="flex gap-2 items-center rounded-md text-white px-4 py-2" onClick={HandleSignOut}>
		        <span className="hidden sm:inline">Logout</span>
            <XMarkIcon className="h-4 w-4" />
          </Button>
        </div>
        <div
          className={
            isContactOpen
              ? "h-full scale-x-[100%] origin-left p-1 transition-all  "
              : "h-full scale-x-[80%]  origin-left p-1 transition-all  "
          }
        >
          <div className=" h-[100%] my-auto flex items-center justify-center">
            <div className="w-[80%] mx-auto h-[95%] my-auto mt-20">
              {Loading ? (
                <div className="h-full w-full  flex  items-center justify-center">
                  <CustomSpinner />
                </div>
              ) : (
                <Editor
                  int
                  init={{
                    height: "100%",
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
              )}

              <Button
                color="blue"
                className="flex items-center mx-auto my-auto mt-4 rounded-md text-white px-4 py-2"
                onClick={handleSubmit}
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Contacts isContactOpen={isContactOpen} />
    </>
  );
}
