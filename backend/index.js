'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const QuestionRouter = require("./routes/questionrouter.js");


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

 //when http://localhost:8070/student ran it will execute StudentRouter.js file
 app.use("/question",QuestionRouter);



app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
