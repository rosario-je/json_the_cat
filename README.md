# Cat Breed Description Lookup

This Node.js script allows users to retrieve a description of a cat breed by providing the breed name as input. It utilizes theCatAPI to fetch information about cat breeds.

## Prerequisites

Before running this script, ensure you have Node.js installed on your system.

## Installation

1. Clone or download the repository to your local machine.
2. Navigate to the directory containing the script.
3. Install the required dependencies using npm:


```npm install request readline```

## Usage

1. Open your terminal or command prompt.
2. Navigate to the directory containing the script.
3. Run the script using Node.js:

```node cat_breed_description.js```

4. You will be prompted to enter a breed name.
5. Type the name of the breed and press Enter.

## How it works

1. The script uses the request library to make HTTP requests and the readline library to interact with the user via the command line.
2. Upon execution, the user is prompted to enter a breed name.
3. The script constructs a URL using the user's input and sends a request to theCatAPI.
4. Upon receiving a response, it checks for errors and logs the HTTP status code.
5. If the breed is not found, it displays a corresponding message and exits.
6. If the breed is found, it parses the response body into JSON and displays the description of the breed.
7. Finally, the script exits.

### Note
- If you encounter any issues or errors while running the script, ensure that you have a stable internet connection and that theCatAPI is accessible.
- TheCatAPI may have usage limits or restrictions. Ensure you comply with their terms of service when using the API.

## Author
Jose Eduardo Payamps 



