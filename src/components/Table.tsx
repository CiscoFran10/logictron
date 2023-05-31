import { Item } from "@/interfaces";
import React from "react";
import TableItem from "./TableItem";

const categories = [
	"ID",
	"máquina",
	"Data",
	"Turno",
	"Status",
	"codp",
	"desc",
	"hora",
	"moti",
	"oee",
	"opro",
	"cfun",
	"nfun",
	"qtreal",
];

interface TableProps {
	data: Item[];
}

const Table = ({ data }: TableProps) => {
	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-base table-auto">
				<thead className="text-xs text-gray-500 text-left">
					<tr>
						{categories.map((category, index) => (
							<th
								key={index}
								scope="col"
								className="px-3 py-3 font-medium uppercase"
							>
								{category}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<TableItem key={item.maquSup} {...item} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
