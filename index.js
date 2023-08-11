const express = require('express');
const { processJobs } = require('./src/search_jobs');
const app = express();
const port = process.env.PORT || 3000;

app.get('/data', async (request, response) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(`${Date(Date.now())} Searching for results`)
    const data = await processJobs()
    console.log(`${Date(Date.now())} Data processed`)
    response.send(data);
});

app.listen(port, "0.0.0.0", () => console.log(`Server listening on port ${port}.`));