const path = require("path")
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

var cors = require('cors')
app.use(cors())


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const db = require('./queries.js')

app.use(express.static(path.join(__dirname, '../front/dist')));

app.get('/', (request, response) => {
  res.sendFile(path.join(__dirname, '../front/build/index.html'));
})

app.get('/api/catalogue', db.getFigureCatalogue)
app.get('/figure/:figureid', db.getFigureById)
app.get('/cart', db.getDisplayFigureByID)

app.get('/login', db.getUserAuthLogin)
app.get('/users/:id', db.getUserInfoByID)
app.get('/admin/users', db.getAllUsers)
app.post('/register', db.postUserRegister)


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

