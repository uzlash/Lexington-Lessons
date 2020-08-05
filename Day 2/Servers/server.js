const http = require('http')
const url = require('url')
const fs = require('fs')

let server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url)
    if(pathname && pathname === '/a') {
        // synchronous
        // let contents = fs.readFileSync('a.html')
        // res.end(`${content.toString()}`)
        fs.readFile('a.html', { encoding: 'utf-8'}, (err, content) => {
            if(err) console.log(err)
            res.end(`${content.toString()}`)
        })
    }

    else if(pathname && pathname === '/hello/world') {
        res.end('hello world')
    }

    // if(url.parse(req.url)) {
    //     const {query} = url.parse(req.url)
    //     if(query && query.length > 0) {
    //         const name = query.split('=')[1]
    //         res.end(`Hello ${name}`)
    //     }
    // }

    res.end(`404 not found`)
})

server.listen(3000,() => {
    console.log("server listening on port 3000")
})