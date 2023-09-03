import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swaggerOptions';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
