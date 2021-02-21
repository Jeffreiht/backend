//Sera el encargado de tener tan solo el codigo de la conexion de la base de datos

const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', ()=> {
    console.log('DB is conected');
});