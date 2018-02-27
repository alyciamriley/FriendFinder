//=========================================================================
//DEPENDENCIES
//=========================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


function css(request, response) {
    if (request.url === '..public/css/styles.css') {
      response.writeHead(200, {'Content-type' : 'text/css'});
      var fileContents = fs.readFileSync('.public/css/style.css', {encoding: 'utf8'});
      response.write(fileContents);
    }
  }  

//=========================================================================
//EXPRESS CONFIGURATION
//=========================================================================

var app = express();

var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); 

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted: \n')
//     res.end(JSON.stringify(req.body, null, 2))
// });

//=========================================================================
//ROUTER
//=========================================================================

require(path.join(__dirname, './routes/apiRoutes'))(app);
require(path.join(__dirname,'./routes/htmlRoutes'))(app);

//=========================================================================
//LISTENER
//=========================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});