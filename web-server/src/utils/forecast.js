require('dotenv').config();
const request = require('request');
const WEATHER_KEY = process.env.WEATHER_KEY;

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.error) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        weather: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
        preciptation: body.current.precip,
        humidity: body.current.humidity,
      });
    }
  });
};

module.exports = forecast;
