import express  from "express";
import cors from "cors";

const server = express();
const PORT = 5000;
server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
  const {username, avatar} = req.body;
  const isUserInUse = users.some(user => user.username === username);

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


server.post("/tweets", (req, res) => {
  const {username, tweet} = req.body;

  if(!users.find(user => user.username === username)){
    return res.send("UNAUTHORIZED")
  }

  tweets.push({username, tweet});
  res.send("OK");
});


server.get("/tweets", (req, res) => {
  const ten = tweets.slice(-10);
  const resp = ten.map(tweet => {
    const user = users.find(user => user.username === tweet.username);
    if (user !== undefined && user.avatar !== undefined){
      return {
        username: tweet.username,
        avatar: user ? user.avatar : "",
        tweet: tweet.tweet,
      };
    }
  });
  const filteredTweets = resp.filter(tweet => tweet !== null);
  res.send(filteredTweets);
});

server.listen(PORT);