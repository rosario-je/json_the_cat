const request = require('request');
const readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter a breed name:', function(answer) {
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${answer}`
  request(api, (error, response, data) => {
    if (error) console.log(error);
  
    console.log(response.statusCode);
  
    console.log(typeof data)
  
  })
})
