//VERY IMPORTANT!!!!!!!!!!!!!
//from burger.js, db.Burger is defined as the table (the Burger model)
//from index.js, db can run the sequelize methods
var db = require("../models");

var express = require("express");
var router = express.Router();

console.log(db.Burger);

// Create all the routes and set up logic within those routes where required.
router.get('/', function(request, response){
	db.Burger.findAll({}).then(function(data){//remember: .then is a promise
		var burgerSources = [{source:'/img/giantburger.jpg', name:'giant burger'}, {source:'/img/healthierburger.jpg', name: 'healthier burger'}, {source:'/img/lettucebunburger.jpg', name: 'lettuce bun burger'}];
		//var burgerImageSelection = burgerSources[Math.floor(Math.random()*burgerSources.length)];
		var handlebarsObject = {
			burger: data,
			burgerImage: burgerSources[Math.floor(Math.random()*burgerSources.length)]
		};
		response.render('index', handlebarsObject);
	});
});

router.post('/', function(request, response){
	//enter the appropriate hamburgers table column names
	//enter the hamburger name provided from the input field
	//in index.handlebars, the hidden input for 'devoured' is value 0 for false...
	db.Burger.create({
		burger_name: request.body.burger_input,
		devoured: request.body.devoured
	}).then(function(){
		response.redirect('/');
	});
});

router.put('/:id', function(request, response){
	var condition = 'id = ' + request.params.id;

	db.Burger.update({devoured: request.body.devoured}, condition, function(){
		response.redirect('/');
	});
});


// Export routes for server.js to use.
module.exports = router;