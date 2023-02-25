/* eslint-disable no-console */
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');


const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`App listening at port ${port}`);
  });
  