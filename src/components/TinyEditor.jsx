"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
// import Collapse from "react-collapse";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    online: false,
    date: "04/10/21",
  },
];

  export function MembersTable() {
    const [isTableOpen, setIsTableOpen] = useState(true);
  
    const handleToggleTable = () => {
      setIsTableOpen(!isTableOpen);
    };
  
    return (
      
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-white">
        <Card className="w-full max-w-screen-md ">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none bg-white dark:bg-blue-gray-900"
          >
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Destinatarios
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Ve la información de todos los miembros
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button variant="outlined" size="sm">
                  Mostrar Todos
                </Button>
                <Button
                  className="flex items-center gap-3"
                  size="sm"
                  color="blue"
                >
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Añadir
                  nuevo destinatario
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <Tabs value="all" className="w-full md:w-max">
                <TabsHeader>
                  {TABS.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      &nbsp;&nbsp;{label}&nbsp;&nbsp;
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </CardHeader>
          {isTableOpen && (
            <CardBody className="overflow-scroll px-0 mt-4">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ img, name, email, online, date }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
  
                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar src={img} alt={name} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {email}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={online ? "online" : "offline"}
                              color={online ? "green" : "blue-gray"}
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edit User">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
          )}
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography variant="small" color="blue-gray" className="font-normal">
              Page 1 of 10
            </Typography>
            <Button
              onClick={handleToggleTable}
              size="sm"
              color="blue"
              className="hover:shadow-md"
            >
              {isTableOpen ? "Ocultar Tabla" : "Mostrar Tabla"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const TextEditor = () => {
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
  
    const hermesMailing = () => {
      const content = tinymce.activeEditor.getContent();
      setEditorContent(content);
      console.log("Contenido a enviar:", content);
    };
  
    useEffect(() => {
      initTinyMCE();
  
      return () => {
        tinymce.remove();
      };
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-blue-500">
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
        <Button
          onClick={hermesMailing}
          size="sm"
          color="blue"
          className="hover:shadow-md"
        >
          Enviar
        </Button>
      </div>
    );
  };

  export default TextEditor;
 