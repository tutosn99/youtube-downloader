console.clear();
// Imports
import express from "express";
import cors from "cors";
import {validateRequestBody} from './errors/validateRequestBody'
import {youtubeProcessRequest} from './services/youtubeProcessRequest'
// init App
const app = express();


// Hosting
const PORT = 3000;
const HOST = "192.168.0.7";

// MiddleWares
app.use(cors());
app.use(express.json());


// EndPoints
app.post('/youtube/search', async (req, res) => {
    if (!validateRequestBody(req.body, res)) return;
    const searchResults = await youtubeProcessRequest(req.body)
    res.status(200).json(searchResults);
});

// Start APP
app.listen(PORT, HOST, () => {
  console.log(`Server corriendo en http://${HOST}:${PORT}`);
});
