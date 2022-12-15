const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  { name: "Rashad", phoneNumber: "304-719-6233" },
  { name: "Niyaz", phoneNumber: "715-695-8959" },
  { name: "Saleh", phoneNumber: "571-575-9370" },
  { name: "Vusal", phoneNumber: "660-565-8401" },
  { name: "Tamerlan", phoneNumber: "507-867-8404" },
];

app.post("/phonebook", function (req, res) {
  users.push(req.body);
  res.json(req.body);
});

app.get("/phonebook", function (req, res) {
  res.json(users);
});

app.listen(3000);
