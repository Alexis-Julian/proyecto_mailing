import TinyMCE, { MembersTable } from "../../components/TinyEditor";
import TinyEditor from "../../components/TinyEditor";
import { ENDPOINT } from "@/shares/constants";
import { cookies } from "next/headers";
import Mailing from "@/components/Mailing";

async function fetchContacts() {
	try {
		const response = await fetch("http://localhost:3000/api/mailing");
		const data = await response.json();
		if (data.statusCode != 200) return null;
		return data.data;
	} catch (e) {}
}

const HomePage = async () => {
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
	/* const data = getEmails(); */
	const data = await fetchContacts();

	return (
		<div className="h-full animate-fade-in  w-[80%] mx-auto relative  overflow-hidden flex flex-col gap-4 ">
			<Mailing contacts={data} />
		</div>
	);
};

export default HomePage;
