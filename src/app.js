//Sera el encargado de tener tan solo el codigo del servidor o el framework
const express = require('express');
const cors = require('cors');

const app = express();

//SETTINGS
app.set('port', process.env.PORT || 4000);

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.use('/api/users', require('./routes/users'))
app.use('/api/citas', require('./routes/citas'))
//app.get('/users', (req, res) => res.send('Users Send'));







module.exports = app;