// var express = require('express');
// var fs = require('fs');
// var app = express();
// var path = require('path');
// var bodyParser = require('body-parser');


// var PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));


// // require("./routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// // app.get('/', function(req, res) {
// // 	res.render('home')
// // });


// // app.get('/', function (req, res) {
// //  res.sendFile(path.join(__dirname, "/public/home.html"));
// // });

// // app.get('/survey', function(req, res) {
// //  res.sendFile(path.join(__dirname, "/public/survey.html"));

// // });



// app.listen(PORT, function() {
// 	console.log("Listening on port: " + PORT);
// });



var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {

	console.log("Now listening on port: " + PORT);
})