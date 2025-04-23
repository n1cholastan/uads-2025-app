import express, { json } from 'express';
import cors from 'cors';
import router from './routes/routes';
import { config } from 'dotenv';
config();


const PORT = process.env.PORT ?? 3001;


const app = express();


app.use(json());
app.use(cors());
app.use(express.static('public'));


app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
