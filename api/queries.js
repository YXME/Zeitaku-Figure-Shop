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

const getFigureCatalogue = (request, response) => {
  pool.query('SELECT FIGUREID, FIGURETITLE, URL FROM FIGURE', (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const getDisplayFigureByID = (request, response) => {
  const figureid = request.params.figureid
  pool.query('SELECT FIGURENAME, ILLUSTRATION, EURPRICE FROM FIGURE WHERE FIGUREID = $1', [figureid], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const getFigureByUrl = (request, response) => {
  const url = request.params.url
  pool.query('SELECT * FROM FIGURE WHERE URL = $1', [url], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const postUserAuthRegister = (request, response) => {
  const { email, firstname, lastname, password, address, city, zipcode, countryid }  = request.query
  pool.query('SELECT * FROM UTILISATEUR WHERE EMAIL = $1', [email], (error, result) => {
    if (error) {
      console.log(error)
    }
    else if(result.rows[0] != null){
      status = false
      return response.status(409).send({ success: false, message: "L'utilisateur existe déjà."});     
    }
    else {
      pool.query('SELECT REGIONID FROM LKCOUNTRYREGION WHERE COUNTRYID = $1', [countryid], (error, result) => {
        const regionid = result.rows[0].regionid
      
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if(err) {
            console.log(err)
          }
          else {
            const hashpassword = hash;
            pool.query('INSERT INTO UTILISATEUR (EMAIL, FIRSTNAME, LASTNAME, PASSWORD, ADDRESS, CITY, ZIPCODE, COUNTRYID, REGIONID, CLEARANCE) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 0)', [email, firstname, lastname, hashpassword, address, city, zipcode, countryid, regionid], (error, results) => {
              if (error) {
                console.log(error)
              }
              else {
                pool.query('SELECT EMAIL, FIRSTNAME, LASTNAME, ADDRESS, CITY, ZIPCODE, COUNTRYID, REGIONID, CLEARANCE FROM UTILISATEUR WHERE EMAIL = $1', [email], (error, result) => {
                  if (error) {
                    console.log(error)
                  }
                  else {
                    let token = jwt.sign({ id: result.rows[0].userid }, config.secret, {expiresIn: 86400 });
                    response.status(200).send({ auth: true, token: token, user: result.rows[0] });
                  }
                });
              }
            })
          }
        });
      })
    }
  });
}

const postUserAuthLogin = (request, response) => {
    const {email, password} = request.query
    pool.query('SELECT * FROM UTILISATEUR WHERE EMAIL = $1', [email], (error, results) => {
      if (error) {
        console.log(error)
      }
      else if(results.rows.length == 0){
        return response.status(404).send({ success: false, message: "L'utilisateur n'existe pas" });
      }
        else {
        bcrypt.compare(password, results.rows[0].password, function(err, result){
          if(err) {
            console.log(err)
          }
          else if(!result){
            return response.status(401).send({success: false, message: 'Le mot de passe est incorrect'});
          }
          else {
            pool.query('SELECT EMAIL, FIRSTNAME, LASTNAME, ADDRESS, CITY, ZIPCODE, COUNTRYID, REGIONID, CLEARANCE FROM UTILISATEUR WHERE EMAIL = $1', [email], (error, results) => {
              if (error) {
                console.log(error)
              }
              else {
                let token = jwt.sign({ id: result.id }, config.secret, { expiresIn: 86400 });
                response.status(200).send({ auth: true, token: token, user: results.rows[0] });
              }
            });
          }
        });
      }
    })
}

const changePassword = (request, response) => {
  const { userid, newpassword } = request.query
  bcrypt.hash(newpassword, saltRounds, (err, hash) => {
    if(err) {
      console.log(err)
    }
    else {
      pool.query('UPDATE UTILISATEUR SET PASSWORD = $2 WHERE USERID = $1', [userid, hash], (error, results) => {
        if (error) {
          console.log(error)
        }
        return response.status(200).json({ succes: true })
      })
    }
  });
}

const getAllOrders = (request, response) => {
    pool.query('SELECT * FROM ORDERS ORDER BY ORDERID DESC', (error, results) => {
      if (error) {
        console.log(error)
      }
      else {
        response.status(200).json(results.rows)
      }
    })
}

const UpdateOrderStatus = (request, response) => {
  const { orderid, status } = request.query
  pool.query('UPDATE ORDERS SET ORDERSTATUS = $1 WHERE ORDERID = $2', [status, orderid], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const UpdateOrderPaymentStatus = (request, response) => {
  const { orderid, status } = request.query
  pool.query('UPDATE ORDERS SET ORDERPAYMENTSTATUS = $1 WHERE ORDERID = $2', [status, orderid], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const getUserInfoByID = (request, response) => {
  const userid = request.params.userid
  pool.query('SELECT * FROM UTILISATEUR WHERE USERID = $1', [userid], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const getOrderByUserId = (request, response) => {
  const userid = request.params.userid
  pool.query('SELECT * FROM ORDERS WHERE USERID = $1', [userid], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const getOrderById = (request, response) => {
  const orderid = request.params.orderid
  pool.query('SELECT * FROM ORDERS WHERE ORDERID = $1', [orderid], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows[0])
    }
  })
}

const getOrderContent = (request, response) => {
  const orderid = request.params.orderid
  pool.query('SELECT F.FIGUREID, F.FIGURETITLE, F.URL, F.EURPRICE FROM FIGURE F, ORDERS O, LKFIGUREORDER LK WHERE O.ORDERID = LK.ORDERID AND O.ORDERID = $1 AND F.FIGUREID = LK.FIGUREID', [orderid], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const getCountryList = (request, response) => {
  pool.query('SELECT * FROM COUNTRY', (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const getShipperByRegion = (request, response) => {
  const regionid = request.params.regionid
  pool.query('SELECT S.SHIPPERID, S.SHIPPERNAME FROM SHIPPER S, LKSHIPPINGREGION SR WHERE S.SHIPPERID = SR.SHIPPERID AND SR.REGIONID = $1', [regionid], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const getShippingFeesByRegion = (request, response) => {
  const regionid = request.params.regionid
  pool.query('SELECT * FROM SHIPPINGFEESREGION WHERE REGIONID = $1', [regionid], (error, results) => {
    if (error) {
      console.log(error)
    }
    else {
      response.status(200).json(results.rows)
    }
  })
}

const postOrder = (request, response) => {
  const { userid, shipperid, date, grandtotal }  = request.query
  var cart = JSON.parse(request.query.cart)
  pool.query("INSERT INTO ORDERS (USERID, SHIPPERID, ORDERSTATUS, ORDERDATE, ORDERPAYMENTSTATUS, GRANDTOTAL) VALUES ($1, $2, 'Confirmée', $3, 'En traitement', $4)", [userid, shipperid, date, grandtotal], (error, results) => {
    if (error) {
      console.log(error)
      return response.status(500).send({ success: false, message: "Insertion impossible" });
    }
    else {
      pool.query('SELECT ORDERID FROM ORDERS WHERE USERID = $1 AND ORDERDATE = $2', [userid, date], (error, results) => {
        if (error) {
          console.log(error)
          return response.status(500).send({ success: false, message: "Commande introuvable" });
        }
        else {
          cart.forEach(element => {
            pool.query('INSERT INTO LKFIGUREORDER VALUES($1, $2)', [orderid, element.figureid], (error, result) => {
              if (error) {
                console.log(error)
                return response.status(500).send({ success: false, message: "Insertions impossible" });
              }
              else {
                return response.status(200).send({ orderid: results.rows[0].orderid })
              }
            });
          });
        }
      });
    }
  });
}



module.exports = {
  postUserAuthLogin,
  getUserInfoByID,
  getAllOrders,
  postUserAuthRegister,
  getOrderByUserId,
  getOrderById,
  getCountryList,
  getOrderContent,

  getFigureCatalogue, 
  getDisplayFigureByID,
  getFigureByUrl,

  getShipperByRegion,
  getShippingFeesByRegion,
  postOrder,
  changePassword,

  UpdateOrderPaymentStatus,
  UpdateOrderStatus
};