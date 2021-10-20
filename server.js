const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Route
app.get('/', (req, res) =>
  res.send('hello!')
)

app.listen(PORT, () => console.log(`Listening on PORT: PORT`));