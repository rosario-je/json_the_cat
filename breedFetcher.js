const request = require('request');

//Create fetching function with breedname and callback as params
const fetchBreedDescription = function (breedName, callback) {
  //Api used
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  //HTTPS request 
  request(api, (error, response, body) => {
    //If error happens, call callback function with an error, and null as params
    if (error) {
      callback(error, null);
    } else {
      //Parse string to JSON
      const data = JSON.parse(body);
      //If no breed is found
      if (data.length === 0) {
        //Call callback with the error being the log
        callback("Breed not found", null);
      } else {
        //Call callback with the description
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
