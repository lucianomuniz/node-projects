const http = require('http');

const url =
  'http://api.weatherstack.com/current?access_key=66e463aa956c590b95efc2c35c6d76f6&query=44.1545,-75.7088&units=m';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const request = http.request(url, options, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log(error);
});

request.end();
