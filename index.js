const express = require('express');
const { create }  = require('express-handlebars');

const getCountryInfo = require('./lib/countries');

const app = express();
const port = 3000;

const hbs = create({ /* config */ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/localidad/:number', (req, res) => {
  const localidad = getCountryInfo(req.params.number);
  res.render('country', { localidad: localidad } );
})

app.listen(port, () => {
  console.log(`Countries app listening on port ${port}`)
})