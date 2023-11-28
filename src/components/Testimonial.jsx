"use client";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Avatar,
} from "@material-tailwind/react";

export default function TestimonialCard({ feedback }) {
	function StarIcon() {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className="h-5 w-5 text-yellow-300"
			>
				<path
					fillRule="evenodd"
					d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
					clipRule="evenodd"
				/>
			</svg>
		);
	}
	return (
		<Card
			color="transparent"
			shadow={false}
			className="w-full h-full  max-w-[26rem] grid grid-rows-2 items-center justify-center  relative"
		>
			<CardHeader
				color="transparent"
				floated={false}
				shadow={false}
				className="grid grid-cols-2 grid-rows-2 items-end justify-end m-0 mx-0 pt-3   "
			>
				<div className="grid items-center justify-center col-start-1 col-end-2 row-start-1 row-end-3  h-full">
					<Avatar
						size="xl"
						variant="circular"
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
						alt="tania andrew"
					/>
				</div>

				<div className="flex flex-col items-center gap-1">
					<div className="flex flex-col gap-0.5  ">
						<p className="text-lg font-bold  ">{feedback.name} </p>
					</div>
					<div className="flex">
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
					</div>
				</div>

				<div className="grid row-start-2 row-end-3 col-start-2 col-end-3 h-full items-center ">
					<p className="text-center font-normal">{feedback.job}</p>
				</div>
			</CardHeader>
			<CardBody className="p-0 flex items-center">
				<p className="text-center ">{feedback.feedback}</p>
			</CardBody>
		</Card>
	);
}
