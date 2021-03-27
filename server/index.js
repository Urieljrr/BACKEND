const express = require('express');
const morgan = require('morgan')
const app = express();

const { Mongoose } = require('./database');

//setting
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/users',require('./routers/usuarios.routers'));

//starting the server

app.listen(app.get('port'), () => {
    console.log('Serve on port 3000', app.get('port'));
});
