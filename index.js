const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/test.html');
});

app.get('/liste', function (req, res) {
    res.sendFile(__dirname + '/liste.json');
});

app.listen(3005, () => console.log('Example app listening on port 3005!'))