const path = require('path');
const express = require('express');
const app = express();
const port = 3003;
const router = require('./router.js');

//middleware
const morgan = require('morgan');
const parser = require('body-parser');

//use middleware
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use("/api", router)

app.listen(port, () => {console.log(`listening on port ${port}`)});