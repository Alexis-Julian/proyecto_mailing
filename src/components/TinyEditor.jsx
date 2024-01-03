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
      <div className="h-full w-full relative ">
        <div className="absolute z-10 flex space-x-2">
          <Button className="rounded-full p-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 transition-all" onClick={HandleToggleContacts}>
		  <span className=" mr-2 hidden sm:inline">Destinatarios</span>
            <i
              className={
                isContactOpen
                  ? "fa-solid fa-arrow-left transition-all "
                  : "fa-solid fa-arrow-left rotate-180 transition-all"
              }
            ></i>
          </Button>

          <Button className="rounded-full p-2 bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700 transition-all" onClick={HandleSignOut}>
		  <span className="hidden sm:inline">Logout</span>
            <i className="fa-solid fa-circle-xmark"></i>
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
                className=" flex items-center mx-auto my-auto mt-4 rounded-md bg-blue-500 text-white px-4 py-2"
                onClick={handleSubmit}
              >
                {" "}
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
