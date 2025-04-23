import { Request, Response } from "express";
import { Client } from "@notionhq/client";
import { SponsorStructured } from "../utils/BackendTypes";
import { config } from "dotenv";
config();

const notionSecret = process.env.NOTION_TOKEN;
const sponsorID = process.env.NOTION_SPONSORS_DB_ID;

const notion = new Client({
	auth: notionSecret,
});

export const getSponsors = async (req: Request, res: Response): Promise<void> => {
	try {
        const response = await notion.databases.query({
            database_id: sponsorID as string,
            sorts: [
                {
                  property: "Name",
                  direction: "ascending",
                },
              ]
        });

        const sponsors: SponsorStructured[] = response.results.map((page: any) => {
            const name = page.properties.Name.title[0]?.text?.content || "No Sponsor Found";
            const location = page.properties.Location.rich_text[0]?.text?.content || "Auckland";
            const isDeal = page.properties?.isDeal?.checkbox ?? false;
            const deal = page.properties.Deal.rich_text[0]?.text?.content || "Deal pending";
            const imageSrc = page.properties.Image.files[0]?.file?.url || "";
            const link = page.properties.Link.url || "";

            return {
                id: page.id,
                name,
                location,
                isDeal,
                deal,
                imageSrc,
                link,
            }
        });

        res.status(200).json(sponsors);
    } catch (error) {
        console.error("Error fetching sponsors:", error);
        res.status(500).json({ message: "Error fetching sponsors"});
    }
};