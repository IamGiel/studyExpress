var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//ROUTING:
//==========ROUTE API 
require('./app/routing/api-routes.js')(app);

//==========ROUTE HTML 
require('./app/routing/html-routes.js')(app);


//==========LISTENER
app.listen(PORT, function (){
	console.log("listening on PORT: " + PORT);
});