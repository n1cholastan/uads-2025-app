import { Request, Response } from 'express';
import { Client } from '@notionhq/client';
import { LinksStructured } from '../utils/BackendTypes';
import { config } from 'dotenv';
config();

const notionSecret = process.env.NOTION_TOKEN;
const linkID = process.env.NOTION_LINKS_DB_ID;

const notion = new Client({
  auth: notionSecret,
});

export const getLinks = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await notion.databases.query({
      database_id: linkID as string,
      sorts: [
        {
          property: 'Order',
          direction: 'descending',
        },
      ],
    });

    const links: LinksStructured[] = response.results.map((page: any) => {
      const text = page.properties.Text.title[0]?.text?.content || 'No Name';
      const show = page.properties?.Show?.checkbox ?? false;
      const link = page.properties.Link.url || '';

      return {
        id: page.id,
        text,
        show,
        link,
      };
    });

    res.status(200).json(links);
  } catch (error) {
    console.error('Error fetching links:', error);
    res.status(500).json({ message: 'Failed to fetch execs ' });
  }
};
