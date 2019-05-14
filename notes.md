//require express lib
const express = require ('express');
const handlebars = require('express-handlebars');

//create an instance of the lib app server
const app = express();

app.engine('handlebars', handlebars());



/*	=========================================================================================
	=========================================================================================
	=========================================================================================
	=========================================================================================
	=========================================================================================	
	=========================================================================================
	=========================================================================================

*/


let requestLocation = '/:name';

let handleRequest = (request, response) => {
	console.log('handling request');
	//let resp = "year is: " + request.params.year + "color is: " + request.params.color
	//let resp = "foo is: " + request.query.foo;
	//let resp = "<html><body><h1>hello</h1></body></html>";
	//let resp = "<html><body><h1>" + request.params.name + "</h1></body></html>";
	response.render('home', {name:request.params.name});
};

app.get(requestLocation, handleRequest);

});

app.listen(3000);
console.log('starting server');

//localhost = 127.0.0.1