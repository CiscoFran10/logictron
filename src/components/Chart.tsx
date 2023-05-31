import { Item } from "@/interfaces";
import React from "react";
import { LineChart, Line, CartesianGrid, ResponsiveContainer } from "recharts";

interface ChartProps {
	data: Item[];
}

const Chart = ({ data }: ChartProps) => {
	return (
		<ResponsiveContainer width={"100%"} height={200}>
			<LineChart width={1400} height={300} data={data}>
				<CartesianGrid
					horizontal={false}
					strokeDasharray="4"
					stroke="#383d45"
				/>
				<Line type="monotone" dataKey="horaSup" stroke="#4ade80" />
				<Line type="monotone" dataKey="ooeSup" stroke="#f87171" />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Chart;
