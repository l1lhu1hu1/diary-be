import express, {Request, Response} from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swaggerOptions';
import { diaries } from './routes/diaries';
import { diary } from './routes/diary';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

app.get('/', (req, res) => {
  res.send('top page')
});

app.get('/diaries', (req, res) => {
  diaries(req, res);
});

app.get('/diary/:diaryId', (req, res) => {
  diary(req, res)
})
