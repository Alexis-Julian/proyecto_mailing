import Contacts from "@/components/Contacts";

async function fetchContacts() {
	try {
		const response = await fetch("http://localhost:3000/api/mailing");
		const data = await response.json();
		if (data.statusCode != 200) return null;
		return data.data;
	} catch (e) {}
}

export default async function Contact() {
	const data = await fetchContacts();
	return (
		<section className="w-full h-full  flex items-start justify-center animate-fade-in   ">
			<Contacts data={data} />
		</section>
	);
}
