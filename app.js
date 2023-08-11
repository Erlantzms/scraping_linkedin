const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
   origin: '*'
}));

app.use((request, response) => {
   response.json({ message: 'Hey! This is your server response!' }); 
});

module.exports = app;