var tableData = require('../data/table-data.js');
var waitlistData = require('../data/waitinglist-data.js');

module.exports = function(app){
	console.log("API ROUTES...");
	app.get('/api/tables', function(req, res){
		res.json(tableData);
	});

	app.get('/api/waitlist', function(req, res){
		res.json(waitlistData);
	});

	//POST ROUTE: Will allow user to add data to our list
	app.post('/api/tables', function(req, res){
		if (tableData.length < 5){
			tableData.push(req.body);
			res.json(true);
		}else {
			waitlistData.push(req.body);
			res.json(false);
		}
	})
	//Clearing our arrays
	app.post('/api/clear', function(){
		tableData = [];
		waitlistData = [];

		console.log(tableData);
		console.log(waitlistData);
	});

}