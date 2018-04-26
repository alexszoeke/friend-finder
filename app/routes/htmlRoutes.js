// var server = require('server.js');

// var app = express();

// app.get("/", function (req, res) {
//     // res.send("Welcome to the Star Wars Page!")
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/api/survey", function (req, res) {
//     return res.json(characters);
// });

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/public/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
