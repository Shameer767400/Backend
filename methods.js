import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('hello from home page!');
  console.log("")
});
app.get('/users', (req, res) => {
  res.send('hello from users page!');
});
app.use(express.json());
app.listen(8006, () => {
  console.log(`server is running at port 8006`);
});  