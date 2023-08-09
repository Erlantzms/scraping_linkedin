const express = require('express');
const { processJobs } = require('./src/search_jobs');
const app = express()

// // Define middleware for all routes
// app.use((request, response, next) => {
//   console.log(request)
//   next()})

// // Define route for GET request on path '/'
app.get('/', async (request, response) => {
  const data = await processJobs()
  response.send(data);
});

// // Start the server on port 3000
app.listen(
   3000, 
   () => console.log(`Server listening on port 3000.`));