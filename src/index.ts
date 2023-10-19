// src/app.ts
import express from 'express';
import bookRouter from './routes/book.router';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', bookRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;