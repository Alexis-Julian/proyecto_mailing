"use client";

import {
	MagnifyingGlassIcon,
	ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
	Input,
	Chip,
	Tabs,
	TabsHeader,
	Tab,
	IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

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

const TABLE_HEAD = ["Member", "Function", "Employed", ""];

const TABLE_ROWS = [
	{
		img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
		name: "John Michael",
		email: "john@creative-tim.com",
		job: "Manager",
		org: "Organization",
		online: true,
		date: "23/04/18",
	},
	{
		img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
		name: "Alexa Liras",
		email: "alexa@creative-tim.com",
		job: "Programator",
		org: "Developer",
		online: false,
		date: "23/04/18",
	},
	{
		img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
		name: "Laurent Perrier",
		email: "laurent@creative-tim.com",
		job: "Executive",
		org: "Projects",
		online: false,
		date: "19/09/17",
	},
	{
		img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
		name: "Michael Levi",
		email: "michael@creative-tim.com",
		job: "Programator",
		org: "Developer",
		online: true,
		date: "24/12/08",
	},
	{
		img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
		name: "Richard Gran",
		email: "richard@creative-tim.com",
		job: "Manager",
		org: "Executive",
		online: false,
		date: "04/10/21",
	},
];

export function TableContacts({ data }) {
	const [useEmails, setEmail] = useState([]);

	// data.then((data) => setEmail(data));

	useEffect(() => {
		const PromiseEmail = async () => {
			data.then((data) => setEmail(data));
			console.log(useEmails);
		};
		PromiseEmail();
	}, [data]);

	return (
		<section className="h-full w-full flex flex-col gap-8 ">
			<header className="rounded-none h-[15%] p-2 ">
				<div className="mb-8 flex items-center justify-between gap-8">
					<div>
						<h5 variant="h5" color="blue-gray" className="text-xl">
							Members list
						</h5>
						<p color="gray" className="mt-1 font-normal">
							See information about all members
						</p>
					</div>
					<div className="flex shrink-0 flex-col gap-2 sm:flex-row">
						<button className="uppercase border-[1px] px-4 py-2 border-black rounded-lg text-sm">
							outlined
						</button>
						<button className="uppercase border-[1px] px-4 py-2 text-white bg-black border-black rounded-lg text-sm flex items-center">
							<UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
						</button>
					</div>
				</div>
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<Tabs value="all" className="w-full md:w-max">
						<TabsHeader>
							{TABS.map(({ label, value }) => (
								<Tab key={value} value={value}>
									&nbsp;&nbsp;{label}&nbsp;&nbsp;
								</Tab>
							))}
						</TabsHeader>
					</Tabs>
					<div className="w-full md:w-72">
						<Input
							label="Search"
							icon={<MagnifyingGlassIcon className="h-5 w-5" />}
						/>
					</div>
				</div>
			</header>
			<main className="overflow-y-scroll px-0 h-[80%]  ">
				<table className="mt-4 w-full min-w-max table-auto text-left">
					<thead>
						<tr>
							{TABLE_HEAD.map((head, index) => (
								<th
									key={head}
									className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
								>
									<div className="flex items-center font-normal">
										{head}{" "}
										{index !== TABLE_HEAD.length - 1 && (
											<ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
										)}
									</div>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{Array.isArray(useEmails) &&
							useEmails.map(({ email, org, date }, index) => {
								const isLast = index === TABLE_ROWS.length - 1;
								const classes = isLast
									? "p-4"
									: "p-4 border-b border-blue-gray-50";

								return (
									<tr key={index}>
										<td className={classes}>
											<div className="flex items-center gap-3">
												<div className="flex flex-col">
													<p className="font-normal opacity-70">{email}</p>
												</div>
											</div>
										</td>
										<td className={classes}>
											<div className="flex flex-col">
												<p className="font-normal opacity-70">Anonima</p>
											</div>
										</td>

										<td className={classes}>
											<p
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												23/04/18
											</p>
										</td>
										<td className={classes}>
											<IconButton variant="text">
												<PencilIcon className="h-4 w-4" />
											</IconButton>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</main>
			<footer className="flex items-center justify-between border-t border-blue-gray-50 p-4 h-[10%]">
				<p variant="small" color="blue-gray" className="font-normal">
					Page 1 of 10
				</p>
				<div className="flex gap-2">
					<button className="uppercase border-[1px] px-4 py-1 border-black rounded-lg text-sm hover:bg-black hover:text-white transition-all">
						Previous
					</button>
					<button className="uppercase border-[1px] px-4 py-1 border-black rounded-lg text-sm hover:bg-black hover:text-white transition-all">
						Next
					</button>
				</div>
			</footer>
		</section>
	);
}
