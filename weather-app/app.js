const yargs = require('yargs');

const { getLocationCoordinates, getLocationWeather } = require('./geoLocation');

//Customize yargs
yargs.version('1.0.0');

// Create weather command
yargs.command({
  command: 'weather',
  describe: 'Get the weather information',
  builder: {
    location: {
      description: 'The location address, city, state or country',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    getLocationWeather(argv.location);
  },
});

// Create coordinates command
yargs.command({
  command: 'coordinates',
  describe: 'Get the latitude and longitude coordinates',
  builder: {
    location: {
      description: 'The location address, city, state or country',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    getLocationCoordinates(argv.location);
  },
});

yargs.parse();
