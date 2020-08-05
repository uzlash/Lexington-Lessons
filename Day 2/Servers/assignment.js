const express = require('express')

const server = express()

//Creating middleware
// let count = 0
// server.use((req, res, next) => {
//     count++
//     if(count > 5) {
//         res.send('Sorry u ran out of trails')
//     } else {
//         next();
//     }
// })

// server.use(express.static(__dirname + 'a.html'))

server.get('/', (req, res) => res.send('This is a public route'))

server.use('/signin', (req, res, next) => {
    const {password} = req.query
    if(password == 'secret') {
        res.send(`Welcome User, you are signed in`)
        next()
    }
    else {
        res.send('Error Signing in')
    }
})

// server.get('/signup/:name', (req, res) => {
//     const {nameParam} = req.param 
//     res.send('Signup' + nameParam)
//     })


server.listen(3000, () => {
    console.log("Server running on port 3000")
})