const request = require('request');
const args = process.argv.slice(2);
if (args.length < 1) {
  console.log("Error: expected at least one argument");
  process.exit();
}

request(`https://api.thecatapi.com/v1/breeds/search?name=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log("Error:",error.message);
    process.exit();
  }
  if (response && (response.statusCode < 200 || response.statusCode >= 300)) {
    console.log("Error:",response.statusCode);
    process.exit();
  }
  const breedInfo = JSON.parse(body);
  if (breedInfo.length === 0) {
    console.log(`Error: Page for breed '${args[0]}' not found`);
  } else {
    console.log(breedInfo[0].description);
  }
});