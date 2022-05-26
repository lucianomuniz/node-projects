require('dotenv').config();
const chalk = require('chalk');
const request = require('request');

const getTownWeather = (town) => {
  getCoordinates(town, (coordinates) => getGeolocation(coordinates));
};

const getTownCoordinates = (town) => {
  getCoordinates(town, ({ latitude, longitude }) => {
    console.log(
      chalk.inverse(`Latitude: ${latitude}, Longitude: ${longitude}`)
    );
  });
};

// local functions
const getGeolocation = ({ latitude, longitude }) => {
  coordinates = `${latitude},${longitude}`;
  const API_KEY = process.env.API_KEY;
  const API_URL = 'http://api.weatherstack.com';
  const url = `${API_URL}/current?access_key=${API_KEY}&query=${coordinates}&units=m`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log('Unable to connect to waether service!');
    } else if (response.body.error) {
      console.log('Unable to find location');
    } else {
      const temperature = response.body.current.temperature;
      const precip = response.body.current.precip;
      const feellLike = response.body.current.feelslike;
      const description = response.body.current.weather_descriptions[0];

      console.log(
        chalk.inverse(
          `It is currently ${description}, ${temperature} ceusius degrees out, but it feels like ${feellLike} ceusius degreess out. There is a ${precip}% chance of rain.`
        )
      );
    }
  });
};

const getCoordinates = (town, callback) => {
  const ACCESS_KEY = process.env.ACCESS_KEY;
  const geoCodeUrl = `http://api.mapbox.com/geocoding/v5/mapbox.places/${town}.json?access_token=${ACCESS_KEY}&language=pt&limit=1`;

  request({ url: geoCodeUrl, json: true }, (error, response) => {
    coordinates = '';

    if (error) {
      console.log('Unable to connect to waether service!');
    } else if (response.body.features.length === 0) {
      console.log('Unable to find location');
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      callback({ latitude, longitude });
    }
  });
};

module.exports = {
  getTownWeather,
  getTownCoordinates,
};
