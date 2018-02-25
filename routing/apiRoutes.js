// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendArray = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    app.get("/api/frienddata", function(req, res) {
        res.json(friends);
    });












}