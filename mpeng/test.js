const lib = require('lib');
/*
const mathgenius = lib.mpeng.mathgenius['@dev'];

let result = await mathgenius.add({
  a: 3,
  b: 4
});
*/

console.log("Result=" + lib.mpeng.mathgenius['@dev'].add({
  a: 3,
  b: 4
}) );
