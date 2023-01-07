import express  from "express";
import cors from "cors";

const server = express();
const PORT = 5000;
server.use(express.json());
server.use(cors());

const users = [];

server.post("/sign-up", (req, res) => {
  const newAccount = req.body;

  if(!newAccount.username || !newAccount.avatar){
    return res.status(422).send("Por favor mande todos os campos preenchidos!")
  }

  const user = users.length + 1;
  newAccount.username = user;
  users.push(newAccount)

  users.push(newAccount);
  res.send("OK");
});


server.listen(PORT, () => {
  console.log("Servidor funcionou")
});