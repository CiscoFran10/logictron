import { Item } from "@/interfaces";
import React from "react";

const TableItem = ({
	maquSup,
	dmaqSup,
	dataSup,
	dmotSup,
	qtrealSup,
	oproSup,
	codpSup,
	descSup,
	horaSup,
	turnSup,
	motiSup,
	oeeSup,
	cfunSup,
	nfunSup,
}: Item) => {
	const status = motiSup === 0;

	return (
		<tr className="text-sm border-b">
			<td className="px-3 py-4">
				<span
					className={`rounded-md px-2 py-1 bg-gray-200 text-gray-100 font-semibold`}
				>
					{maquSup}
				</span>
			</td>
			<th scope="row" className="px-3 py-4 whitespace-nowrap font-normal">
				{dmaqSup}
			</th>
			<td className="px-3 py-4 text-xs whitespace-nowrap">{dataSup}</td>
			<td className="px-3 py-4">{turnSup}</td>
			<td className="px-3 py-4 whitespace-nowrap">
				<div
					className={`flex items-center gap-2
          ${status ? "text-green-400" : "text-red-400"}`}
				>
					<span className="material-symbols-rounded">
						{status ? "check_circle" : "cancel"}
					</span>
					<span>{dmotSup}</span>
				</div>
			</td>
			<td className="px-3 py-4">{codpSup || "- - -"}</td>
			<td className="px-3 py-4 text-xs">{descSup || "- - -"}</td>
			<td className="px-3 py-4">{horaSup}</td>
			<td className="px-3 py-4">{motiSup}</td>
			<td className="px-3 py-4">{oeeSup}</td>
			<td className="px-3 py-4">{oproSup}</td>
			<td className="px-3 py-4">{cfunSup}</td>
			<td className="px-3 py-4 text-xs">
				<span className="line-clamp-2">{nfunSup || "- - -"}</span>
			</td>
			<td className="px-3 py-4">{qtrealSup}</td>
		</tr>
	);
};

export default TableItem;
