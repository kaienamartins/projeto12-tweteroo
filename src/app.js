import express  from "express";

const server = express();

server.get("/tweets", (req, res) => {
  res.send("Olá")
});

server.get("/sign-up", (req, res) => {
  res.send("Cadastro")
});

server.listen(5000, () => {
  console.log("Servidor funcionou")
})