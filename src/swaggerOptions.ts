import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.ts'], // あなたのルートが定義されている場所を指定します
};

const specs = swaggerJsdoc(options);

export default specs;
