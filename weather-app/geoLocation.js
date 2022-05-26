const chalk = require('chalk');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const getLocationCoordinates = (address) => {
  geocode(address, (error, { location, latitude, longitude } = {}) => {
    if (error) return console.log(chalk.red('Error', error));

    console.log(
      chalk.inverse(
        `Latitude: ${latitude}, Longitude: ${longitude} - Location: ${location}`
      )
    );
  });
};

const getLocationWeather = (address) => {
  geocode(address, (error, { location, latitude, longitude } = {}) => {
    if (error) return console.log(chalk.red('Error', error));

    forecast(
      latitude,
      longitude,
      (error, { weather, temperature, feelslike, preciptation }) => {
        if (error) return console.log(chalk.red('Error', error));

        console.log(
          chalk.inverse(
            `In ${location}, it is ${weather.toLowerCase()}, currently ${temperature} degrees out, but fells like ${feelslike} degrees, with a ${preciptation}% chance of rain.`
          )
        );
      }
    );
  });
};

module.exports = {
  getLocationCoordinates,
  getLocationWeather,
};
