# Cat Breed Description Fetcher

This Node.js application fetches the description of a cat breed using theCatAPI. It consists of a module for fetching breed descriptions and a main script to interact with users via the command line.

## Installation

1. Clone or download the repository to your local machine.
2. Navigate to the directory containing the files.

## Usage

Run the `index.js` file using Node.js with the breed name as a command-line argument:

```node index.js [breed name]```
Example: ```node index.js siberian```

## How it works

The application utilizes the fetchBreedDescription function from the breedFetcher.js module to retrieve the description of the specified cat breed. Here's how it works:

1. The fetchBreedDescription function accepts a breed name and a callback function.
2. It constructs the API URL based on the provided breed name and makes an HTTPS request to theCatAPI.
3. Upon receiving a response, it parses the JSON body.
4. If an error occurs during the request or if the breed is not found, it invokes the callback with an error message.
5. If the breed is found, it invokes the callback with the description of the breed.
6. In the index.js file, the script reads the breed name from the command-line arguments.
7. It calls the fetchBreedDescription function with the provided breed name and a callback function.
8. If an error occurs during the fetching process, it logs the error message.
9. If the description is retrieved successfully, it logs the description to the console.


### Note
- Ensure you have a stable internet connection to fetch data from theCatAPI.
- The application will log an error message if the breed name is not found.

## Author
Jose Eduardo Payamps 



