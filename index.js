const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const ConnectDB = require('./db/index')
const app = express();


//Middleware 
app.use(logger('dev'));
app.use(cors())
app.use(express.json());

//
app.use('/api', require('./routes/index'))

//Connect to db
ConnectDB().then(() => logger('App', 'Database ready.', 'success'))
    
    const port = process.env.PORT || 5000
    app.listen(port, ()=>console.log(`Milade server started on ${port}`))