var path = require("path");
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
  //posting to the friends api on the friends.js file
  app.post("/api/friends", function(req, res) {
    //the userInput is going to hold the data that is being submitted to the api
    var userInput = req.body;

    //the user responses variable is holding the scores that are being submitted to the api
    var userResponses = userInput.scores;

    //these variables hold the returned response from the API (the name and image of the determined best match.
    var matchName = "";
    var matchImage = "";

    //this variable is holding the total difference between the matches in the API and the new user submitted by the user.
    var totalDifference = 10000;

    //look at all friends in the array and loop through the data
    for (var i = 0; i < friends.length; i++) {
      //This variable holds the result of the math problem.

      var diff = 0;

      //This for loop looks through the data being held in the UserResponse variable (the scores) that was returned by the above for loop.
      for (var j = 0; j < userResponses.length; j++) {

        //first value is the scores from the friends array.  Second variable are the scores from the users input. Math.abs gives the absolute value of anumber so a negative value cannot be returned. 
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
    res.json({ status: "ok", matchName: matchName, matchImage: matchImage });
  });
};
