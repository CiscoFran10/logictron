import React from "react";
import Head from "next/head";

import Table from "@/components/Table";
import Chart from "@/components/Chart";
import { Item } from "@/interfaces";

export default function Home({ data }: { data: Item[] }) {
	if (data)
		return (
			<>
				<Head>
					<title>Logictron</title>
				</Head>
				<main className="flex justify-center items-center mx-6 my-20">
					<div className="flex flex-col gap-10 max-w-[1400px] overflow-x-auto">
						<h1 className="text-2xl font-bold uppercase text-white">
							Logictron
						</h1>

						<Chart data={data} />
						<Table data={data} />
					</div>
				</main>
			</>
		);
	return null;
}

export const getServerSideProps = async () => {
	const configFile = await fetch("http://localhost:3000/api/config.ini");
	const config = await configFile.json();

	const apiUrl = config.API_URL;
	const login = config.API_USER;
	const password = config.API_PASSWORD;

	const res = await fetch(apiUrl, {
		headers: {
			Authorization: "Basic " + btoa(login + ":" + password),
			"Content-Type": "application/json",
		},
	});

	const data = await res.json();

	return {
		props: { data: data }, // will be passed to the page component as props
	};
};
