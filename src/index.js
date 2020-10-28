const express = require('express');
const morgan = require('morgan');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 5000);
app.set('json spaces' , 2);


//miderwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//rutas

app.use(require('./rutas/index'));
app.use( '/API/datos' , require('./rutas/datos'));

// iniciando el sevidor 
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto  ${app.get('port')}`);
});