const lib = require('lib');
const request = require("request");

param = { a: 3, b: 4 };

lib.mpeng.mathgenius['@dev'].add( param ).then( function(result) {
	console.log(  param.a + " + " + param.b + " = " + result );	
});

lib.mpeng.mathgenius['@dev'].multiply( param ).then( function(result) {
	console.log(  param.a + " x " + param.b + " = " + result );	
});

lib.mpeng.mathgenius['@dev'].substract( param ).then( function(result) {
	console.log(  param.a + " - " + param.b + " = " + result );	
});

promise = lib.mpeng.mathgenius['@dev'].multiply( param ).then( function(result){ 
	return result + 1;
});

promise.then( function(result) {
	console.log( result );	
});

promise = lib.mpeng.mathgenius['@dev'].getAllPatients( "john" ).then( function(result){ 
	console.log( "getAllPatients 1=" + JSON.stringify(result) );	
});


stdlibURLRoot =
"http://audenty.herokuapp.com/rest/service/getAllAddresses";

request.get(stdlibURLRoot, (error, response, body) => {
  response =  body;
  console.log( response + " END");
});


promise = lib.mpeng.mathgenius['@dev'].multiply( param ).then( function(result){ 
	console.log("Hi");
});
