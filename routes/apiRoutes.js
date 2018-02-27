// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var path = require('path');
var friendsArray = require("../app/data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // ===============================================================================
// MATH!!
// ===============================================================================

  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
    console.log("user input: " + JSON.stringify(userInput));

    var userResponses = userInput.scores;
    console.log("user responses: " + userResponses);

  });
};
