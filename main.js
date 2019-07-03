const USBRelay = require("./USBRelay.js");
const relay = new USBRelay();

//express API variables
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ type: 'application/json' }));

//http server variables
const http = require('http').Server(app);
const listenPort = 4400;

//app route setups

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

//about the author, this program, etc.
app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
});

//API routes

app.get("/shades_up", function (req, res) {
   ShadesUp();
   res.send({returnStatus: "shades-up"});
});

app.get("/shades_down", function (req, res) {
   ShadesDown();
   res.send({returnStatus: "shades-down"});
});

//END API routes

//serve up any files in the static folder like images, CSS, client-side JS, etc.
app.use(express.static('views/static'));

http.listen(listenPort, function () {
    console.log("listening on *:" + listenPort);
});

function ShadesUp()
{
    relay.setState(1, true);

    setTimeout(function () {
        relay.setState(1, false);
    }, 1000);
}

function ShadesDown()
{
    relay.setState(2, true);

    setTimeout(function () {
        relay.setState(2, false);
    }, 1000);
}
