import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('running');
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
})