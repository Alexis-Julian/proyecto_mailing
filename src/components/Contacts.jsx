"use client";
import React, { useState } from "react";
import {
	MagnifyingGlassIcon,
	CheckIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
	Card,
	CardHeader,
	Input,
	Button,
	CardBody,
	Avatar,
	IconButton,
	Tooltip,
} from "@material-tailwind/react";

export default function ContactsList({ isContactOpen }) {
	const [activeIndex, setActiveIndex] = useState();
	const [textInput, setTextInput] = useState();
	const [newRecipient, setNewRecipient] = useState("");
	const [error, setError] = useState();
	const [TABLE_ROWS, SET_TABLE_ROWS] = useState([
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
	]);
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

	const TABLE_HEAD = ["Email", "Editar"];

	const [isTableOpen, setIsTableOpen] = useState(true);

	const handleToggleTable = () => {
		setIsTableOpen(!isTableOpen);
	};
	const handleNewRecipientChange = (e) => {
		setNewRecipient(e.currentTarget.value);
	};

	// Nueva función para agregar destinatarios
	const handleAddButton = () => {
		// Aquí puedes realizar alguna lógica de validación si es necesario
		if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(newRecipient)) {
			return setError("La dirección de correo electrónico no es válida");
		}

		// Agregar el nuevo destinatario a la lista
		SET_TABLE_ROWS([
			...TABLE_ROWS,
			{
				img: "URL_DE_LA_IMAGEN",
				name: "Nuevo Destinatario",
				email: newRecipient,
				online: true, // o false según tu lógica
				date: "Fecha Actual",
			},
		]);

		// Limpiar el estado y errores
		setNewRecipient("");
		setError("");
	};
	const handleEditButton = (index, email) => {
		setActiveIndex(index);
		setTextInput(email);
	};

	const handleConfirm = (originalEmail) => {
		if (textInput === originalEmail) {
			return handleCancel();
		}
		if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(textInput)) {
			return setError("The email address is invalid");
		}
		//Caso correcto
		SET_TABLE_ROWS(
			TABLE_ROWS.map((row, rowIndex) =>
				rowIndex === activeIndex ? { ...row, email: textInput } : row
			)
		);
		handleCancel();
	};

	const handleCancel = () => {
		setError();
		setTextInput();
		setActiveIndex();
	};
	/* className={
		isContactOpen
			? "h-full left-0 bottom-0 absolute top-0 translate-x-[100%] transition-all p-2"
			: "h-full left-0 bottom-0 absolute top-0 translate-x-[0%] transition-all p-2"
	} */

	return (
		<div className="h-full w-full relative p-2">
			<div className="absolute  h-full w-full bg-[#00cba1] blur-sm left-0 right-0 top-0"></div>
			<Card className=" h-full text-xs rounded-md overflow-hidden border-4 border-light-green-50 ">
				<CardHeader
					floated={false}
					shadow={false}
					className="rounded-none  dark:bg-blue-gray-900 flex flex-col items-center justify-center "
				>
					<div className="mb-8 flex flex-col    gap-8">
						<div className="flex flex-col gap-3 text-center">
							<p className="text-lg">Destinatarios</p>
							<p className="text-sm">
								Vea la información de todos los miembros
							</p>
						</div>
						<div className="w-full  flex  flex-col items-center justify-center ">
							<Input
								label="Nuevo Destinatario"
								className="w-full py-2 md:py-4"
								onChange={handleNewRecipientChange}
								value={newRecipient}
							/>
							<Button
								className="mt-2 w-full flex items-center justify-center p-3"
								size="sm"
								color="green"
								onClick={handleAddButton}
							>
								<UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Añadir
							</Button>
							{error && <p className="text-red-500 mt-2">{error}</p>}
						</div>
					</div>
					<div className="flex flex-col items-center justify-center  ">
						<div className="w-full md:w-72">
							<Input
								label="Search"
								icon={<MagnifyingGlassIcon className="h-5 w-5" />}
							/>
						</div>
					</div>
				</CardHeader>
				<CardBody className="px-0 mt-4">
					<table className="w-full min-w-max table-auto">
						<thead className="w-full">
							<tr className="grid grid-row-1 grid-cols-2">
								{TABLE_HEAD.map((head) => (
									<th
										key={head}
										className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 "
									>
										<p>{head}</p>
									</th>
								))}
							</tr>
						</thead>
						<tbody className="h-full w-full gap-1">
							{TABLE_ROWS.map(({ name, email, status }, index) => {
								return (
									<tr
										key={name}
										className="w-full grid grid-rows-1 grid-cols-2 py-4 px-1 border-b border-gray-400"
									>
										<td className="flex flex-col items-center justify-center">
											{index === activeIndex ? (
												<Input
													type="text"
													onChange={(e) => setTextInput(e.currentTarget.value)}
													value={textInput}
												/>
											) : (
												email
											)}
											{error && index === activeIndex ? <p>{error}</p> : null}
										</td>
										<td className="text-center">
											{index === activeIndex ? (
												<>
													<Tooltip content="Confirm">
														<IconButton
															color="blue"
															onClick={() => handleConfirm(email)}
															variant="text"
														>
															<CheckIcon size="xl" className="h-6 w-6" />
														</IconButton>
													</Tooltip>
													<Tooltip content="Cancel">
														<IconButton
															color="red"
															onClick={() => handleCancel()}
															variant="text"
														>
															<XMarkIcon size="xl" className="h-6 w-6" />
														</IconButton>
													</Tooltip>
												</>
											) : (
												<Tooltip content="Edit User">
													<IconButton
														onClick={() => handleEditButton(index, email)}
														variant="text"
													>
														<PencilIcon className="h-4 w-4" />
													</IconButton>
												</Tooltip>
											)}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</CardBody>
				{/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter> */}
			</Card>
		</div>
	);
}
