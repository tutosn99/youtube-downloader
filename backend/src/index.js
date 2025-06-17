console.clear();

import express from "express";
import cors from "cors";

import buscarVideos from "./Hooks/buscarVideos.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/searchsong", (req, res) => {
  console.log(req.body);
  console.log("-------------------------------------");
  if (!req.body.title || !req.body.quantity) {
    res.status(200).json({ error: "No se Recibieron los Datos Correctamente" });
    console.log("No se Recibieron los datos");
  }

  const { title, quantity } = req.body;

  const listaDeVideos = async () => {
    try {
      await buscarVideos(title, quantity).then((list) => {
        const playlist = list.map((video, index) => {
        console.log("Datos Recibidos:", {
            id: index,
            title: video.title,
            duration: video.length.simpleText,
            author: video.channelTitle,
            thumbnails: video.thumbnail.thumbnails
              .slice(0, 2)
              .map((t) => t.url),
          });
          return {
            id: index,
            title: video.title,
            duration: video.length.simpleText,
            author: video.channelTitle,
            thumbnails: video.thumbnail.thumbnails
              .slice(0, 2)
              .map((t) => t.url),
          };
        });
        res.status(200).json(playlist);
      });
    } catch (Error) {
      console.log("ERROR:\n",Error);
    }
  };

  listaDeVideos();
});

const PORT = 3000;
const HOST = "192.168.0.7";

app.listen(PORT, HOST, () => {
  console.log(`Server corriendo en http://${HOST}:${PORT}`);
});
