"use client";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Avatar,
} from "@material-tailwind/react";

function formatDate(date) {
	const fecha = new Date(date);
	const day = fecha.getDate();
	const month = fecha.getMonth() + 1;
	const year = fecha.getFullYear();

	// Agregar ceros iniciales si es necesario
	const dayformated = day < 10 ? "0" + day : day;
	const monthformated = month < 10 ? "0" + month : month;

	// Retornar la date formateada
	return `${dayformated}/${monthformated}/${year}`;
}

export default function CardMessage({
	id,
	message,
	image,
	date,
	sender,
	receiver,
}) {
	return (
		<Card
			color="transparent"
			shadow={false}
			className="w-full h-full max-w-[26rem] relative"
		>
			<div className="absolute bottom-0 right-0 text-xs font-bold p-1 ">
				Message: {id}
			</div>
			<div className="absolute bottom-0 left-0 text-xs font-bold  p-1">
				Receiver: {receiver}
			</div>
			<div className="p-4">
				<CardHeader
					color="transparent"
					floated={false}
					shadow={false}
					className="mx-0 flex items-center gap-4 pt-0 pb-8"
				>
					<Avatar size="lg" variant="circular" src={image} alt="tania andrew" />
					<div className="flex w-full flex-col gap-0.5">
						<div className="flex items-center justify-between">
							<p className="text-lg font-semibold" color="blue-gray">
								{sender}
							</p>
						</div>
						<p className="text-sm font-semibold">{formatDate(date)}</p>
					</div>
				</CardHeader>
				<CardBody className="mb-6 p-0 font-semibold">
					<p className=" text-md text-center">&quot;{message}&quot;</p>
				</CardBody>
			</div>
		</Card>
	);
}
