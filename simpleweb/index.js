const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi apple');
});

app.listen(4001, () => {
  console.log('Listening on port 8080');
});
