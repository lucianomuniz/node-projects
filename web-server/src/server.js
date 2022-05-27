const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Robot Tech',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Robot Tech',
    image: '/img/robot.png',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Robot Tech',
    helpMessage: 'Press F1 if you have any question.',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    weather: 'It is snowing',
    temperature: 0,
    feelslike: -2,
    preciptation: 50,
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Robot Tech',
    errorMessage: 'Help article not found',
  });
});

app.get('/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Robot Tech',
    errorMessage: 'Page not found',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
