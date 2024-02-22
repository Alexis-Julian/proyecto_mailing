import CardMessage from "@/components/Card";
import { ENDPOINT } from "@/shares/constants";
export default async function History() {
	const TestMessage = [
		{
			id: 1,
			message:
				"Proin consectetur sapien vitae nisi laoreet, id semper dui gravida.",
			image: "https://via.placeholder.com/150",
			sender: "Hannah",
			receiver: "Hannah",
			date: "2024-02-02T16:08:51.681Z",
		},
		{
			id: 2,
			message:
				"Aenean nec odio et mi congue tincidunt vitae id lacus. Curabitur interdum, lorem et or",
			image: "https://via.placeholder.com/200",
			sender: "Frank",
			receiver: "Alice",
			date: "2024-01-27T18:50:29.649Z",
		},
		{
			id: 3,
			message:
				"Proin consectetur sapien vitae nisi laoreet, id semper dui gravida.",
			image: "https://via.placeholder.com/150",
			sender: "Bob",
			receiver: "Ian",
			date: "2024-01-20T16:02:07.210Z",
		},
		{
			id: 4,
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
			image: "https://via.placeholder.com/300",
			sender: "Frank",
			receiver: "Hannah",
			date: "2024-02-17T03:28:35.514Z",
		},
		{
			id: 5,
			message:
				"Nam non dolor auctor, fermentum odio ac, eleifend odio. Vivamus placerat massa nec augue ultrices malesuada.",
			image: "https://via.placeholder.com/150",
			sender: "Charlie",
			receiver: "Julia",
			date: "2024-02-18T03:33:49.840Z",
		},
		{
			id: 6,
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
			image: "https://via.placeholder.com/350",
			sender: "Julia",
			receiver: "Hannah",
			date: "2024-01-23T07:14:37.756Z",
		},
		{
			id: 7,
			message:
				"Proin consectetur sapien vitae nisi laoreet, id semper dui gravida.",
			image: "https://via.placeholder.com/150",
			sender: "Frank",
			receiver: "Julia",
			date: "2024-02-06T09:40:49.060Z",
		},
		{
			id: 8,
			message:
				"Nulla facilisi. Ut fringilla, lorem quis scelerisque faucibus, orci magna condimentum orci, quis dapibus risus ante a nisi.",
			image: "https://via.placeholder.com/350",
			sender: "Charlie",
			receiver: "Emma",
			date: "2024-02-04T10:45:21.744Z",
		},
		{
			id: 9,
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
			image: "https://via.placeholder.com/250",
			sender: "Ian",
			receiver: "Charlie",
			date: "2024-02-02T16:17:36.092Z",
		},
		{
			id: 10,
			message:
				"Maecenas fermentum consequat mi, vel mollis erat varius id. Ut id feugiat mauris.",
			image: "https://via.placeholder.com/300",
			sender: "Grace",
			receiver: "Julia",
			date: "2024-01-25T11:02:17.527Z",
		},
	];

	const FetchingHistory = async () => {
		const response = await fetch(ENDPOINT + "/api/message");
		const data = await response.json();
		if (data.statusCode == 200) {
			return data.data;
		} else {
			return null;
		}
	};

	const messageHistory = await FetchingHistory();

	return (
		<div className="h-full w-full overflow-y-scroll">
			<div className="w-[80%] h-full    grid grid-cols-4 grid-rows-2  rounded-md mx-auto mt-5">
				{TestMessage.map((props, index) => (
					<article
						key={index}
						className="animate-fade-in-right m-5 rounded-md  backdrop-blur-lg bg-white/50 text-black shadow-md shadow-[#92C7CF]"
					>
						<CardMessage {...props} />
					</article>
				))}
			</div>
		</div>
	);
}
