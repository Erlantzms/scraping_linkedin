const express = require('express');
const { processJobs } = require('./src/search_jobs');
const app = express()
const port = process.env.PORT || 3000;

// // Define route for GET request on path '/'
app.get('/data', async (request, response) => {
  console.log(`${Date(Date.now())} Searching for results`)
  const data = await processJobs()
  console.log(`${Date(Date.now())} Data processed`)
  response.send(data);
});

// // Start the server on port 3000
app.listen(port, "0.0.0.0", () => console.log(`Server listening on port ${port}.`));