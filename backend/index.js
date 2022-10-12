'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const doctorRoutes = require('./routes/doctorrouter');
const userRoutes = require('./routes/userRouter')

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/', doctorRoutes.routes);
app.use('/user', userRoutes.routes);



app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
