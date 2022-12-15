const express = require('express');
const app = express();
const { readFileSync } = require('fs')
let loadUser = () => JSON.parse(readFileSync('users.json'))


app.get('/', (req, res) => {
    res.json(loadUser())
})

app.listen(3000, )