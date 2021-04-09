const path = require("path")
const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const app = express()
const port = 3000

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}

app.use(allowCrossDomain)

const db = require('./queries.js')

app.use(express.static(path.join(__dirname, '../front/dist')));

app.get('/', (request, response) => {
  res.sendFile(path.join(__dirname, '../front/build/index.html'));
})

app.get('/api/catalogue', db.getFigureCatalogue)
app.get('/figureid/:figureid', db.getFigureById)
app.get('/figure/:url', db.getFigureByUrl)
app.get('/cart', db.getDisplayFigureByID)
app.get('/countrylist', db.getCountryList)

app.get('/login', db.postUserAuthLogin)
app.get('/users/:userid', db.getUserInfoByID)
app.get('/orders/:userid', db.getOrderByUserId)
app.get('/order/:id', db.getOrderById)
app.get('/admin/users', db.getAllUsers)
app.get('/register', db.postUserAuthRegister)

app.get('/shipperlist/:regionid', db.getShipperByRegion)
app.get('/shipperfees/:regionid', db.getShippingFeesByRegion)
app.get('/change-password', db.changePassword)
app.get('/confirm-order', db.postOrder)


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
