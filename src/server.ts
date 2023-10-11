import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swaggerOptions';
import { diaries } from './routes/diary/diaries';
import { diary } from './routes/diary/diary';
import { newUser } from './routes/user/new';
import { user } from './routes/user/user';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8080, () => {
  // eslint-disable-next-line
  console.log('Server is running on port 8080');
});

// eslint-disable-next-line
app.get('/', (req, res) => {
  res.send('top page');
});

app.get('/diaries', (req, res) => {
  diaries(req, res);
});

app.get('/diary/:diaryId', (req, res) => {
  diary(req, res);
});

app.get('/user/new', (req, res) => {
  newUser(req, res);
});

app.get('/user/:userId', (req, res) => {
  user(req, res);
});
