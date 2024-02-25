const { fetchBreedDescription } = require('./breedFetcher');

//Param used in main function
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  //If error happens (breed not found), log message with error from main function passed (log message)
  if (error) {
    console.log('Error fetching details:', error);
  } else {
    //Log description (second param from main function callback if breed is found)
    console.log(desc);
  }
});
