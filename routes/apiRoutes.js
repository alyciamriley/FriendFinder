
var path = require('path');
var friends = require("../app/data/friends.js");


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
    console.log("req " + JSON.stringify(userInput));

    var userResponses = userInput.scores;
    console.log("user responses: " + userResponses);

  });
};
