const bcrypt = require('bcrypt');
const saltRounds = 12;
const jwt = require('jsonwebtoken');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'zeitakufigureshop',
  password: 'admin',
  port: 5432,
})
const config = require('./config.js')

/*
CONTACT = X
CGV = X
ABOUT => X
LIVRAISON => X



PAYMENT => REGION, COUNTRY, USER, CART, FIGURE, ORDER, SHIPPER, LKCOUNTRYREGION, SHIPPINGFEESREGION

LOGINREGISTER => USER POST

USER => USER, ORDER, COUNTRY, REGION 

INDEX => FIGURE (nom, illu)

FIGURE => FIGURE (all)

CATALOGUE => FIGURE (nom, illu)

CART => FIGURE (nom, illu, prix)
*/

const getFigureCatalogue = (request, response) => {

  pool.query('SELECT FIGUREID, FIGURETITLE, URL FROM FIGURE', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDisplayFigureByID = (request, response) => {
  const figureid = request.params.figureid
  pool.query('SELECT FIGURENAME, ILLUSTRATION, EURPRICE FROM FIGURE WHERE FIGUREID = $1', [figureid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getFigureById = (request, response) => {
  const figureid = request.params.figureid
  pool.query('SELECT * FROM FIGURE WHERE FIGUREID = $1', [figureid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getFigureByUrl = (request, response) => {
  const url = request.params.url
  pool.query('SELECT * FROM FIGURE WHERE URL = $1', [url], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



const postUserRegister = (request, response) => {
  const { email, firstname, lastname, password, address, countryid, regionid }  = request.body

  pool.query('SELECT * FROM UTILISATEUR WHERE EMAIL = $1', [email], (error, result) => {
    if (error) {
      throw error
    }
    if(result.rows[0] != null){
      res.status(409).send("L'utilisateur existe déjà.");
    }
  });

  bcrypt.hash(password, saltRounds, function(err, hash) {
    password = hash;
  });

  pool.query('INSERT INTO UTILISATEUR (EMAIL, FIRSTNAME, LASTNAME, PASSWORD, ADDRESS, COUNTRYID, REGIONID, CLEARANCE) VALUES ($1, $2, $3, $4, $5, $6, $7, 0)', [email, firstname, lastname, password, address, countryid, regionid], (error, results) => {
    if (error) {
      throw error
    }
    pool.query('SELECT * FROM UTILISATEUR WHERE EMAIL = $1', [email], (error, result) => {
      if (error) {
        throw error
      }
      let token = jwt.sign({ id: user.rows[0].userid }, config.secret, {expiresIn: 86400 });
      res.status(200).send({ auth: true, token: token, user: result.rows[0] });
    });
  })
}

const postUserAuthLogin = (request, response) => {
    const {email, password} = request.query


    console.log(email)
    console.log(password)
    pool.query('SELECT * FROM UTILISATEUR WHERE EMAIL = $1', [email], (error, results) => {
      if (error) {
        throw error
      }
      if(results == null){
        res.status(404).send("L'utilisateur existe déjà.");
        console.log(1);
      }
      bcrypt.hash(password, saltRounds, (error, res) => {
        console.log(res)
      })
      
      bcrypt.compare(password, results.rows[0].password, function(err, result){
        if(err) {
          throw err
        }
        if(!result){
          console.log(2);
          return response.json({success: false, message: 'passwords do not match'});
        }
        else {
          console.log(3);
          let token = jwt.sign({ id: result.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
          });
          response.status(200).send({ auth: true, token: token, user: results.rows[0] });
        }
      });
    })
}

const getAllUsers = (request, response) => {

    pool.query('SELECT * FROM UTILISATEUR', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUserInfoByID = (request, response) => {
  const UserId = request.params.userid
  pool.query('SELECT * FROM UTILISATEUR WHERE USERID = $1', [userid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOrderByUserId = (request, response) => {
  const UserId = request.params.userid
  pool.query('SELECT * FROM ORDERS WHERE USERID = $1', [userid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOrderById = (request, response) => {
  const orderid = request.params.orderid
  pool.query('SELECT * FROM ORDERS WHERE ORDERID = $1', [orderid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getFigureOrderList = (request, response) => {
  const orderid = request.params.orderid
  pool.query('SELECT F.FIGUREID, F.FIGURETITLE, F.URL, F.EURPRICE FROM FIGURE F, ORDER O, LKFIGUREORDER LK WHERE = LK.ORDERID = $1 AND F.FIGUREID = LK.FIGUREID', [orderid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



module.exports = {
  postUserAuthLogin,
  getUserInfoByID,
  getAllUsers,
  postUserRegister,
  getOrderByUserId,
  getOrderById,
  getFigureOrderList,

  getFigureById,
  getFigureCatalogue, 
  getDisplayFigureByID,
  getFigureByUrl


};