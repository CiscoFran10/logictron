import fs from "fs";
import ini from "ini";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const configFile = fs.readFileSync("./src/config.ini", "utf-8");
		const configData = ini.parse(configFile);

		res.status(200).json(configData);
	} catch (error) {
		res.status(500).json({ error: "Erro ao ler o arquivo .ini" });
	}
}
