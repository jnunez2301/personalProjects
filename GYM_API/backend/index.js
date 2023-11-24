const secret = require('./utils/secret');
const express = require('express');
const app = express();
const cors = require('cors');
const gymRouter = require('./controller/api/gym')
const path = require('path')

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
)
/* app.use(express.static(path.join(__dirname, 'dist'))); */

app.get('/', (req, res) => {
    res.json({ message: "app is running" });
})

// Router
app.use('/api/gym', gymRouter)

app.listen(secret.port, () => {
    console.log(`App running and listening on PORT: ${secret.port}`);
})