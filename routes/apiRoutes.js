var path = require("path");
var friends = require("../app/data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // ===============================================================================
  // MATH!!
  // ===============================================================================
  //posting to the friends api on the friends.js file
  app.post("/api/friends", function (req, res) {
    var userInput = req.body;
    var userResponses = userInput.scores;
    var matchName = "";
    var matchImage = "";
    var totalDifference = 10000;

    for (var i = 0; i < friends.length; i++) {
      var diff = 0;


      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }


      if (diff < totalDifference) {
        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }

    //add new user to array
    friends.push(userInput);

    //send appropriate response
    res.json({
      status: "ok",
      matchName: matchName,
      matchImage: matchImage
    });
  });
};