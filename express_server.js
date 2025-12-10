import express from 'express';
const app = express();
app.get('/users', (req, res) => {
  res.send('hello from users page!');
});
const PORT = process.env.PORT || 8006;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
