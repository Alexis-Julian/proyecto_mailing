"use client";
import Contacts from "@/components/Contacts";
import TinyMCE, { MembersTable } from "../../components/TinyEditor";
import TinyEditor from "../../components/TinyEditor";

const HomePage = () => {
	return (
		<div className="h-full relative w-full overflow-hidden">
			<TinyEditor />
			<div className="absolute bg-gradient-to-b from-blue-500 to-white blur-lg left-0 top-0 bottom-0 right-0 -z-10"></div>
		</div>
	);
};

export default HomePage;
/*  bg-gradient-to-b from-blue-500 to-white */
