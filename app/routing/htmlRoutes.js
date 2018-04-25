var server = require('server.js');

var app = express();

app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/api/survey", function (req, res) {
    return res.json(characters);
});