import Contacts from "@/components/Contacts";
import TinyMCE, { MembersTable } from "../../components/TinyEditor";
import TinyEditor from "../../components/TinyEditor";
import { ENDPOINT } from "@/shares/constants";
import { cookies } from "next/headers";
import { get } from "react-hook-form";
import { data } from "autoprefixer";

const HomePage = () => {
	const getEmails = async () => {
		const response = await fetch(ENDPOINT + "api/email", {
			headers: {
				Authorization: "Bearer " + cookies().get("accessToken").value,
			},
			method: "GET",
		});

		const data = await response.json();
		if (data.statusCode == 200) {
			return data.data;
		} else {
			return null;
		}
	};
	const data = getEmails();

	return (
		<div className="h-full relative w-full overflow-hidden ">
			<TinyEditor data={data} />
			<div className="bg-black absolute h-full w-full left-0 right-0 bottom-0 top-0 -z-[9] opacity-40"></div>
			<div className="absolute  bg-[url('/image/weqwe.jpg')]   -scale-x-100  left-0 top-0 bottom-0 right-0 -z-10"></div>
		</div>
	);
};

export default HomePage;
