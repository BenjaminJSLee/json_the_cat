const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
if (args.length < 1) {
  console.log("Error: expected at least one argument");
  process.exit();
}

fetchBreedDescription(args[0],(err,desc) => {
  if (err) console.log(err.message);
  else console.log(desc);
});