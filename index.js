const express = require("express");
const req = require("express/lib/request");

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.send("It's going down, BASEMENT!");
});
app.post("/", (req, res) => {
  const { name, age, email } = req.body;

  const user = { name, age, email };

  const result = `My name is ${user.name}, I am ${user.age} years old and my email is ${user.email}`;

  res.send(result);
});

app.listen(3000, () => {
  console.log("It's going down, BASEMENT! on 3000");
});
