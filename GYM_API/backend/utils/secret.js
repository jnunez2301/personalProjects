require('dotenv').config();

const username = `${process.env.MyUser}`
const password = `${process.env.MyPassword}`
const port = process.env.PORT

module.exports = {
    username,
    password,
    port
}