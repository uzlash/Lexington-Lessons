const express = require('express')
const bodyParser = require('body-parser');

const server = express()

//Creating middleware
let count = 0
server.use((req, res, next) => {
    count++
    if(count > 5) {
        res.send('Sorry u ran out of trails')
    } else {
        next();
    }
})

server.use(express.static(__dirname + '/a.html'))

server.get('/', (req, res) => res.send('Home'))

server.get('/signin', (req, res) => {
    const {name} = req.query
    res.send(`Signin user: ${name}`)
})

server.get('/signup/:name', (req, res) => {
    const {nameParam} = req.param 
    res.send('Signup' + nameParam)
    })


server.listen(3000, () => {
    console.log("Server running on port 3000")
})