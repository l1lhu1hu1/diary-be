import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swaggerOptions';
import { diaries } from './routes/diary/diaries';
import { diary } from './routes/diary/diary';
import { createDiary } from './routes/diary/create';
import { deleteAllDiary } from './routes/diary/deleteAll';
import { deleteUserDiary } from './routes/diary/deleteUserDiary';
import { createUser } from './routes/user/create';
import { deleteAllUser } from './routes/user/deleteAll'
import { user } from './routes/user/user';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8080, () => {
  // eslint-disable-next-line
  console.log('Server is running on port 8080');
});

app.get('/', (req, res) => {
  res.send('top page');
});

app.get('/diary/deleteAll', (req, res) => {
  deleteAllDiary(req, res);
});

app.get('/user/new', (req, res) => {
  createUser(req, res);
});

app.get('/user/deleteAll', (req, res) => {
  deleteAllUser(req, res);
});

app.get('/user/:userId', (req, res) => {
  user(req, res);
});

app.get('/user/:userId/diaries', (req, res) => {
  diaries(req, res);
});

app.get('/user/:userId/diary/new', (req, res) => {
  createDiary(req, res);
});

app.get('/user/:userId/diary/deleteUserDiary', (req, res) => {
  deleteUserDiary(req, res);
});

app.get('/user/:userId/diary/:diaryId', (req, res) => {
  diary(req, res);
});

