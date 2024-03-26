const express = require("express");
const mongoConnect = require('./mongoose');
const cors = require('cors')
const app = express();
require("dotenv").config();


const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.use('/api/url', require('./controller/url'))

mongoConnect();
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/api/url`);
});