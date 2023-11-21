const secret = require('./utils/secret');
const express = require('express');
const app = express();
const gymRouter = require('./controller/api/gym')

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.json({ message: "app is running" });
})

// Router
app.use('/api/gym', gymRouter)

app.listen(secret.port, () => {
    console.log(`App running and listening on PORT: ${secret.port}`);
})