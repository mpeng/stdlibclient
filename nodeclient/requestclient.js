const request = require("request");
/*
const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
request.get(url, (error, response, body) => {
  let json = JSON.parse(body);
  console.log(
    `City: ${json.results[0].formatted_address} -`,
    `Latitude: ${json.results[0].geometry.location.lat} -`,
    `Longitude: ${json.results[0].geometry.location.lng}`
  );
});
*/


const stdlibURL =
"https://functions.lib.id/mpeng/mathgenius/?name=mpeng";

request.get(stdlibURL, (error, response, body) => {
  let json = JSON.parse(body);
  console.log(
    `Message: ${json}`
  );
});

stdlibURLRoot =
"https://functions.lib.id/mpeng/mathgenius/";

request.post({
  url: stdlibURLRoot,
  method: 'POST',
  json: {name: 'mpeng'}
}, function(error, response, body){
  console.log("Post1: " + body);
});

num1 = 0;
num2 = 0;
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val + ': ' + array[index]);
  if (index == 2) num1 = array[2]; 
  if (index == 3) num2 = array[3];
});

console.log( num1 + ", " + num2 );
num1 += 0;
num2 += 0;

console.log( typeof(num1) + ", " + typeof(num2));
num1 = Number(num1);
console.log( typeof(num1) + ", " + typeof(num2));

stdlibURLRoot =
"https://mpeng.lib.id/mathgenius@dev/add/";

request.post({
  url: stdlibURLRoot,
  method: 'POST',
  json: {a:Number(num1), b:Number(num2)}
}, function(error, response, body){
  console.log("Post2: " + body);
});


stdlibURLRoot =
"http://audenty.herokuapp.com/rest/service/getAllPatients";

request.get(stdlibURLRoot, (error, response, body) => {
  console.log("gg=" + body);
});
