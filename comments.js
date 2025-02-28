// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Define a port
const port = 3000;
// 4. Define an endpoint
app.get('/comments', (req, res) => {
  res.send('Comments page');
});
// 5. Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});