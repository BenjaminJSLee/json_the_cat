const request = require('request');

const fetchBreedDescription = (breed, cb) => {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (error, response, body) => {
    if (error) {
      cb(error,null);
      return;
    } else if (response && (response.statusCode < 200 || response.statusCode >= 300)) {
      cb(Error(`Error ${response.statusCode}`),null);
      return;
    }
    const breedInfo = JSON.parse(body);
    if (breedInfo.length === 0) {
      cb(Error(`Error: Page for breed '${breed}' not found`),null);
    } else {
      cb(null,breedInfo[0].description);
    }
  });
};

module.exports = {
  fetchBreedDescription,
};