const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('To-Do App Running via Jenkins CI/CD 🚀');
});

app.listen(5000, () => {
  console.log('Server is running on port 000');
});