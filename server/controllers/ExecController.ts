import { Request, Response } from "express";
import { Client } from "@notionhq/client";
import { ExecStructured } from "../utils/BackendTypes";
import { config } from "dotenv";
config();

const notionSecret = process.env.NOTION_TOKEN;
const execID = process.env.NOTION_EXECS_DB_ID;

const notion = new Client({
    auth: notionSecret,
});

export const getExecs = async(req: Request, res: Response): Promise<void> => {
    try {
        const response = await notion.databases.query({
            database_id: execID as string,
            sorts: [
                {
                  property: "Order",
                  direction: "ascending",
                },
              ]
        })

        const execs: ExecStructured[] = response.results.map((page: any) => {
            const name = page.properties.Title.title[0]?.text?.content || "No Name";
            const imageSrc = page.properties.Image.files[0]?.file?.url || "";
            const team = page.properties.Team.select?.name || "General Executive";

            return {
                id: page.id,
                name,
                imageSrc,
                team,
            };
        });

        res.status(200).json(execs);
    } catch (error) {
        console.error("Error fetching execs:", error);
        res.status(500).json({ message: "Failed to fetch execs "})
    }
}