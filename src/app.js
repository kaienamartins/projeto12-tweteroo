import express  from "express";
import cors from "cors";

const server = express();
const PORT = 5000;
server.use(express.json());
server.use(cors());

const users = [];

server.post("/sign-up", (req, res) => {
  const {username, avatar} = req.body;
  const isUserInUse = users.some(user => user.avatar === avatar);

  if(!username || !avatar){
    return res.status(422).send("Por favor mande todos os campos preenchidos!")
  }

  if (isUserInUse) {
    res.status(400).send({ error: 'Usuário já está sendo utilizado, por favor, selecione outro!' });
  } else {
    users.push({username, avatar});
    res.send("OK");
  }
});

server.listen(PORT, () => {
  console.log("Servidor funcionou")
});