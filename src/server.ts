import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    name: "Jefferson",
  });
});

app.listen(3333, () => {
  console.log("Servidor voando 🚀 ");
});
