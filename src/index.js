const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const path = require('path')

const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/index.html'))
})

app.post('/', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    console.log(req.body)
    res.sendFile(path.join(__dirname,'../views/success.html'))
})


app.listen(port,()=>{
    console.log(`Escutando na porta: ${port}`)
})