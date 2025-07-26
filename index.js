// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// ✅ /about route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
