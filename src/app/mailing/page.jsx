"use client";
import Contacts from "@/components/Contacts";
import TinyMCE, { MembersTable } from "../../components/TinyEditor";
import TinyEditor from "../../components/TinyEditor";

const HomePage = () => {
	return (
		<div className="h-full w-full overflow-hidden  bg-gradient-to-b from-blue-500 to-white">
			<TinyEditor />
		</div>
	);
};

export default HomePage;
