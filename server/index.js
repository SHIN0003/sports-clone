// server/index.js
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Set headers for your API call
const headers = {
  'x-rapidapi-key': process.env.API_KEY,
  'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/json'
};

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log(process.env.API_KEY)
});

// app.get('/status', async (req, res) => {
//     try {
//         const response = await axios.get("https://api-nba-v1.p.rapidapi.com/status");
//         res.json(response)
//     }

//     catch (error) {
//         console.log(headers);
//         res.status(500).send('Error status');
//     }
// });

// Example route to make an API request
app.get('/current_season', async (req, res) => {
  try {
    const { season } = req.query
    const response = await axios.get('https://api-nba-v1.p.rapidapi.com/games', { 
        headers,
        params: {
            season: season || 2024,
            league: 'standard'
        }
        
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching live games');
  }
});

app.get('/live-games', async (req, res) => {
    try {
        const response = await axios.get('https://api-nba-v1.p.rapidapi.com/games', { 
            headers,
            params: {
                live: 'all'
            }
            
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching live games');
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
