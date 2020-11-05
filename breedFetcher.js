const request = require('request');

const fetchBreedDescription = (breed, cb) => {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (error, response, body) => {
    if (error) {
      cb(error.message,null);
      return;
    } else if (response && (response.statusCode < 200 || response.statusCode >= 300)) {
      cb(response.statusCode,null);
      return;
    }
    const breedInfo = JSON.parse(body);
    if (breedInfo.length === 0) {
      cb(`Error: Page for breed '${breed}' not found`,null);
    } else {
      cb(null,breedInfo[0].description);
    }
  });
};

module.exports = {
  fetchBreedDescription,
};