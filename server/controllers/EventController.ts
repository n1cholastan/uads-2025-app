import { Request, Response } from 'express';
import { Client } from '@notionhq/client';
import { EventStructured } from '../utils/BackendTypes';
import { config } from 'dotenv';
config();

const notionSecret = process.env.NOTION_TOKEN;
const eventsID = process.env.NOTION_EVENTS_DB_ID;

const notion = new Client({
  auth: notionSecret,
});

export const getEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const response = await notion.databases.query({
      database_id: eventsID as string,
    });

    const events: EventStructured[] = response.results.map((page: any) => {
      const title = page.properties.Title.title[0]?.text?.content || 'Title TBD';
      const location =
        page.properties.Location.rich_text[0]?.text?.content || 'Location to be confirmed';
      const descriptionRaw = page.properties.Description.rich_text || [];
      const descriptionText = descriptionRaw.map((block: any) => block.plain_text).join('\n');
      const description = descriptionText || "Description coming soon.";
      const imageSrc =
        page.properties.Image.files?.[0]?.file?.url ||
        page.properties.Image.files?.[0]?.external?.url ||
        '';
      const eventStartDateTime = page.properties.Date.date?.start || '';
      const eventEndDateTime = page.properties.Date.date?.end || '';
      const form = page.properties.Form.url || '';
      const week = page.properties.Week.rich_text[0]?.text?.content || 'Date TBD';
      const instagram = page.properties.Instagram.url || '';
      
      return {
        id: page.id,
        title,
        location,
        description,
        imageSrc,
        eventStartDateTime,
        eventEndDateTime,
        form,
        week,
        instagram,
      };
    });

    const now = new Date();
    const upcomingEvents = events
      .filter((event) => new Date(event.eventStartDateTime) >= now)
      .sort(
        (a, b) =>
          new Date(a.eventStartDateTime).getTime() - new Date(b.eventStartDateTime).getTime()
      );

    const pastEvents = events
      .filter((event) => new Date(event.eventStartDateTime) < now)
      .sort(
        (a, b) =>
          new Date(b.eventStartDateTime).getTime() - new Date(a.eventStartDateTime).getTime()
      );

    const sortedEvents = [...upcomingEvents, ...pastEvents];

    res.status(200).json(sortedEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Failed to fetch events' });
  }
};

export const getEventById = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  try {
    const response = await notion.databases.query({
      database_id: eventsID as string,
    });

    const events: EventStructured[] = response.results.map((page: any) => {
      const title = page.properties.Title.title[0]?.text?.content || 'Title TBD';
      const location =
        page.properties.Location.rich_text[0]?.text?.content || 'Location to be confirmed';
      const description = page.properties.Description.rich_text[0]?.text?.content || 'Coming Soon';
      const imageSrc = page.properties.Image.files[0]?.file?.url || '';
      const eventStartDateTime = page.properties.Date.date?.start || '';
      const eventEndDateTime = page.properties.Date.date?.end || '';
      const form = page.properties.Form.url || '';
      const instagram = page.properties.Instagram.url || '';
      const week = page.properties.Week.rich_text[0]?.text?.content || 'Date TBD';
      return {
        id: page.id,
        title,
        location,
        description,
        imageSrc,
        eventStartDateTime,
        eventEndDateTime,
        form,
        week,
        instagram,
      };
    });

    const event = events.find((e) => e.id === id);

    if (!event) {
      res.status(404).json({ error: 'Event not found' });
      return;
    }

    res.json(event);
  } catch (err) {
    console.error('Error fetching event:', err);
    res.status(500).json({ error: 'Failed to fetch event' });
  }
};
