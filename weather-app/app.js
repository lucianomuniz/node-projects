const yargs = require('yargs');

const { getTownWeather, getTownCoordinates } = require('./geo');

//Customize yargs
yargs.version('1.0.0');

// Create weather command
yargs.command({
  command: 'weather',
  describe: 'Get the weather information',
  builder: {
    town: {
      description: 'The name of the town',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    getTownWeather(argv.town.replace(' ', '%20'));
  },
});

// Create coordinates command
yargs.command({
  command: 'coordinates',
  describe: 'Get the logitude and latitude coordinates',
  builder: {
    town: {
      description: 'The name of the town',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    getTownCoordinates(argv.town.replace(' ', '%20'));
  },
});

yargs.parse();
