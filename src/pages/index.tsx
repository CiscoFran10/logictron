import React from "react";
import Table from "@/components/Table";
import Chart from "@/components/Chart";
import Head from "next/head";

const login = "LogicCF";
const password = "#L0g1ctr0n#";

export default function Home() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(
					"http://logictron.ddnsking.com:43211//vsupervisor?tipo=visual",
					{
						headers: {
							Authorization: "Basic " + btoa(login + ":" + password),
							"Content-Type": "application/json",
						},
					}
				);

				const data = await res.json();

				if (res.ok) {
					setData(data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, []);

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
