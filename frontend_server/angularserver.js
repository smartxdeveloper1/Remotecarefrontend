const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(80, () => console.log('server started 80'));

app.use(express.static(path.join(__dirname, './dist/smart-sevika')));
app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, './dist/smart-sevika/index.html'));
});

