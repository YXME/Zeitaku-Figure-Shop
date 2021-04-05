const bcrypt = require('bcrypt');
const saltRounds = 12;
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'zeitakufigureshop',
  password: 'admin',
  port: 5432,
})

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


const getUserAuthLogin = (request, response) => {
    const email = request.params.email
    const password = request.params.password

    pool.query('SELECT * FROM UTILISATEUR WHERE EMAIL = $1', [email], (error, results) => {
      if (error) {
        throw error
      }
      bcrypt.compare(password, results.rows.password, function(err, result){
        if(err) {
          throw err
        }
        if(!result){
            
        }
        else {
          let token = jwt.sign({ id: result.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
          });
          res.status(200).send({ auth: true, token: token, user: response.rows[0] });
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
  pool.query('SELECT * FROM UTILISATEUR, ORDERS WHERE UTILISATEUR.USERID = ORDERS.USERID AND UTILISATEUR.USERID = $1', [userid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



module.exports = {
  getUserAuthLogin,
  getUserInfoByID,
  getAllUsers,
  postUserRegister,

  getFigureById,
  getFigureCatalogue, 
  getDisplayFigureByID,
  getFigureByUrl


};