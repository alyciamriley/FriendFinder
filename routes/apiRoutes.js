// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../app/data/friends");
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
    console.log("req body = " + JSON.stringify(req.body));
    console.log("userInput = " + JSON.stringify(userInput));

    var userResponses = userInput.scores;
    console.log("userResponses = " + userResponses);

    //compute best friend match

    var matchName = "";
    var matchImage = "";
    var totalDifference = 1000;

    //examine all existing friends in list
    for (var i = 0; i < friends.length; i++) {
      console.log("friend = " + JSON.stringify(friends[i]));

      //compute differences for each question

      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j]);
      }
      console.log("diff = " + diff);

      if (diff < totalDifference) {
        console.log("closest match found = " + diff);
        console.log("Friend Name = " + friends[i].name);
        console.log("Friend image = " + friends[i].photo);

        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }

    friends.push(userInput);
    res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
  });
};
