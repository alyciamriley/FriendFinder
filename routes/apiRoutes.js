
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
    // console.log("req " + JSON.stringify(userInput));

    var userResponses = userInput.scores;
    // console.log("user responses: " + userResponses);

    var matchName = '';
    var matchImage = '';
    var totalDifference = 10000;

    //look at all friends in current list
    for (var i = 0; i < friends.length; i++ ){
      console.log(
        "friends: " + JSON.stringify(friends[i]));

        //compute the difference between the scores

        //compare variable to hold the result of the math problem
        
        var diff = 0;

        //look through the list that was returned from above 4 loop and run match function on them.

        for (var j = 0; j < userResponses.length; j++) {
          //difference between the results in the array and that of the userresponse (which already only holds the scores.)
          diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        }
        console.log('diff = ' + diff);

        if (diff < totalDifference) {

          totalDifference = diff;
          matchName = friends[i].name;
          matchImage = friends[i].photo;
        }
      
    }

    //add new user to array
    friends.push(userInput);

    //send appropriate response
    res.json({status: 'ok', matchName: matchName, matchImage: matchImage});
  });
};
