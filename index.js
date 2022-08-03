const express = require('express')
const app = express()
const port = 3000

const path = require("path")
var bodyParser = require('body-parser')

app.use(express.static('public'))

var Sendcloud = require('sendcloud');


let msg = {
  apiUser: 'sc_vd5fjb_test_5sOs4c',
  secretKey: '9ed6f22fe63403e18bfae3bb844acde2',
  to: '',
  from: 'chenguan@deakin.edu.au', 
  subject: 'Welcome to join us',
  text: 'Welcome to join us',
  html: '<h1>Welcome to join us</h1>',
};

// init first
var sc = new Sendcloud(msg.apiUser, msg.secretKey, msg.from, 'chenguan');

app.get('/', (req, res) => {
  res.send('index.html')
})


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.post('/subscribe', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  msg.to = req.body.email
  console.log(req.body)
  // send email
  sc.send(msg.to, msg.text, msg.html).then(function(info){
    console.log("info", info);
    res.send("Email sent");
  });
})

app.listen(port, () => {
  console.log(`Project listening on port ${port}`)
})