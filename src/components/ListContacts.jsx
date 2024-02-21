"use client";
import { Card, p } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

export default function ListContacts({ data: contacts }) {
	return (
		<Card className="h-full w-full  overflow-y-scroll">
			<table className="w-full min-w-max table-auto text-left">
				<thead>
					<tr>
						{TABLE_HEAD.map((head) => (
							<th
								key={head}
								className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
							>
								<p className="font-normal leading-none opacity-70">{head}</p>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{contacts.map(({ name, email, date }, index) => {
						const isLast = index === contacts.length - 1;
						const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

						return (
							<tr key={index}>
								<td className={classes}>
									<p className="font-normal">{name}</p>
								</td>
								<td className={classes}>
									<p className="font-normal">{email}</p>
								</td>
								<td className={classes}>
									<p className="font-normal">{date}</p>
								</td>
								<td className={classes}>
									<p className="font-medium">Edit</p>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Card>
	);
}
