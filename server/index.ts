/*import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client } from "@notionhq/client";

dotenv.config();
const app = express();
app.use(cors());
const notion = new Client({ auth: process.env.NOTION_TOKEN! });

const sponsorsDB = process.env.NOTION_SPONSORS_DB_ID!;
const eventsDB = process.env.NOTION_EVENTS_DB_ID!;

function mapEventsPage(page: any) {
  const p = page.properties;

  const startRaw = p.Date.date?.start || ""; // Make sure it's either start or empty
  const endRaw = p.Date.date?.end || startRaw; // Use end date if available, otherwise fall back to start date

  // Access other fields
  return {
    id: page.id,
    eventStartDateTime: startRaw ? new Date(startRaw).toISOString() : "", // Format the start date to ISO format
    eventEndDateTime: endRaw ? new Date(endRaw).toISOString() : "",       // Format the end date to ISO format
    title: p.Title.title?.[0]?.plain_text || "",                          // Safely access the first title in the array
    location: p.Location.rich_text?.[0]?.plain_text || "",               // Access the first location in the rich_text array
    description: p.Description.rich_text?.[0]?.plain_text || "",        // Access the first description in the rich_text array
    imageSrc: p.Image.files?.[0]?.file?.url || "",  
    form:     p.Form.url                       || "",                     // Access the first image file URL
  };
}

app.get("/api/events", async (_, res: Response) => {
  try {
    const response = await notion.databases.query({ database_id: eventsDB });
    console.log(JSON.stringify(response.results, null, 2)); // 👈 inspect this!
    const allEvents = response.results.map(mapEventsPage);
    res.json(allEvents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});


function mapSponsorPage(page: any) {
  const p = page.properties;
  return {
    id:       page.id,
    name:     p.Name.title[0]?.plain_text     || "",
    location: p.Location.rich_text[0]?.plain_text || "",
    deal:     p.Deal.rich_text[0]?.plain_text     || "",
    link:     p.Link.url                       || "",
    imageSrc: p.Image.files[0]?.file.url       || "",
    isDeal:   p.isDeal.checkbox                || false,
  };
}

app.get("/api/sponsors", async (_, res: Response) => {
  try {
    const response = await notion.databases.query({ database_id: sponsorsDB });
    const allSponsors = response.results.map(mapSponsorPage);
    res.json(allSponsors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch sponsors" });
  }
});




const PORT = parseInt(process.env.PORT! ) || 3001;
app.listen(PORT, () => console.log(`🚀 Listening on http://localhost:${PORT}`));*/


import express, { json } from "express";
import cors from "cors";
import router from "./routes/routes";
import { config } from "dotenv";
config();

// Sets our port to the PORT .env value or 3000 by default if .env is not configured
const PORT = process.env.PORT ?? 3001;

// Creates the express server
const app = express();

// Express middleware
app.use(json());
app.use(cors());
app.use(express.static("public"));

// Routes
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});