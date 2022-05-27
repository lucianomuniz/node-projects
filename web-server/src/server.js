const express = require('express');
const path = require('path');

const app = express();
const publicDirPath = path.join(__dirname, '/public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('web-server/index');
});

app.get('/weather', (req, res) => {
  res.send({
    weather: 'It is snowing',
    temperature: 0,
    feelslike: -2,
    preciptation: 50,
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
