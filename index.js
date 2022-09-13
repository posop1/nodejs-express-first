import express from 'express';

const port = 5000;
const app = express();

app.get('/api', (req, res) => {
  res.statusCode = 200;
  res.send('Hi');
});

app.listen(port, () => {
  console.log(`Server start on ${port}`);
});
