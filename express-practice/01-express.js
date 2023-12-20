let express = require('express')

let app = express()

let port = 3000

app.get( "/" , (req , res) => {
    res.send('<h1>Hello World!!!</h1>')
})

app.get( "/users " , (req , res) => {
    res.send('<h1>users List </h1>')
})

app.listen(port)