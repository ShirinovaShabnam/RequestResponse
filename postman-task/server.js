const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  { name: "Shabnam", phoneNumber: "654-567-6345" },
  { name: "Naila", phoneNumber: "517-890-6758" },
  { name: "Solmaz", phoneNumber: "231-755-9215" },
  { name: "Shafag", phoneNumber: "605-565-3851" },
  { name: "Sara", phoneNumber: "465-787-8564" },
];

app.post("/phonebook", function (req, res) {
  users.push(req.body);
  res.json(req.body);
});

app.get("/phonebook", function (req, res) {
  res.json(users);
});

app.listen(3000);
