const axios = require("axios");
const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
axios
  .get(url)
  .then(response => {
    console.log( 
      `City: ${response.data.results[0].formatted_address} -`,
      `Latitude: ${response.data.results[0].geometry.location.lat} -`,
      `Longitude: ${response.data.results[0].geometry.location.lng}`
    );
  })
  .catch(error => {
    console.log(error);
  });

  /*

  const stdlibURL =
  "https://functions.lib.id/mpeng/mathgenius/?name=mpeng";

  axios
  .get(stdlibURL)
  .then(response => {
    console.log( 
      `Message: ${response.data}`
    );
  })
  .catch(error => {
    console.log(error);
  });
*/

/*
  stdlibURL =
  "http://audenty.herokuapp.com/rest/service/getAllPatients";

  axios
  .get(stdlibURL)
  .then(response => {
    console.log( 
      `Message: ${response.data}`
    );
  })
  .catch(error => {
    console.log(error);
  });
*/
