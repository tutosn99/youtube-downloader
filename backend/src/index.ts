import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!")
})

const PORT =  3000;
const HOST = "192.168.0.7";

app.listen(PORT, HOST, () => {
  console.log(`Server corriendo en http://${HOST}:${PORT}`);
});
