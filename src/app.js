import express  from "express";

const server = express();
server.use(express.json());
const users = [];

server.get("/tweets", (req, res) => {
  res.send("Olá")
});

server.post("/sign-up", (req, res) => {
  const {username, avatar} = req.body;
  users.push({username, avatar});
  res.send("OK");
});


server.listen(5000, () => {
  console.log("Servidor funcionou")
})