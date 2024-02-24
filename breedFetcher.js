const request = require('request');
const readline = require('readline');
const { log } = require('console');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter a breed name:', function (answer) {
  //Api link with user input
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${answer}`
  //Create https request of API link
  request(api, (error, response, body) => {
    //Log error if error occurs 
    if (error) console.log(error);

    console.log(response.statusCode);
    //console.log('This is the body:', body);


    //Parse body to turn string into JSON 
    const data = JSON.parse(body)

    // console.log(typeof data);
    //Check if breed exists 
    if (data.length == 0) {
      console.log('Breed not found');
      process.exit();
    }

    //console.log(data);

    //Log cat description
    console.log(data[0].description);
    process.exit();

  })
})
