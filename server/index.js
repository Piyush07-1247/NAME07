const express = require('express');
const cors = require('cors');
const nameData = require('./nameData');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/get-name-data', (req, res) => {
  const { name } = req.body;
  const response = nameData(name);
  res.json(response);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
