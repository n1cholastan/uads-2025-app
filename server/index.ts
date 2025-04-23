import express, { json } from 'express';
import cors from 'cors';
import router from './routes/routes';
import path from 'path';
import { config } from 'dotenv';
config();


const PORT = process.env.PORT ?? 3001;
const app = express();

app.use(json());
app.use(cors());

app.use('/api', router);

app.use(express.static(path.join(__dirname, "../../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
})




app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});