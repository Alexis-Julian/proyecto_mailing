"use client";
import React from "react";
import {
	Popover,
	PopoverHandler,
	PopoverContent,
	Button,
	Chip,
	Typography,
} from "@material-tailwind/react";

export default function PopoverWithDescription({ icon, message }) {
	const [openPopover, setOpenPopover] = React.useState(false);
	const triggers = {
		onMouseEnter: () => setOpenPopover(true),
		onMouseLeave: () => setOpenPopover(false),
	};

	return (
		<div className="flex items-center justify-center  h-full">
			<Popover
				open={openPopover}
				handler={setOpenPopover}
				placement="right-end"
			>
				<PopoverHandler {...triggers}>{icon}</PopoverHandler>
				<PopoverContent
					{...triggers}
					className="z-50  p-1  text-center  shadowmod"
				>
					<span className="text-black ">{message}</span>
				</PopoverContent>
			</Popover>
		</div>
	);
}
