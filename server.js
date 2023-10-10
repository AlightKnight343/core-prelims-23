require('dotenv').config()

//modules
const express = require('express'),
    bodyParser = require('body-parser'),
    ejs = require('ejs')

const app = express()
const PORT = process.env.PORT || 3500

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }), express.urlencoded({ extended: true, limit: '1mb' }))
app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('landing.ejs')
})
app.get('/tickets', (req, res) =>{
    res.render("ticket.ejs")
})
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});