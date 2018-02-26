// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendArray = require("../app/data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendArray);
    });


app.post("/api/friends", function(req, res){
        friendArray.push(req.body);
        res.json(true);
})


}