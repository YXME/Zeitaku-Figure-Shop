const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgresql',
  host: 'localhost',
  database: 'zeitakufigureshop',
  password: 'admin',
  port: 5432,
})

const getUserByAuth = (request, response) => {
    const email = request.params.email
    const password = request.params.password

    pool.query('SELECT * FROM USERS WHERE EMAIL = $1 AND PASSWORD = $2', [email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getFigureCatalogue = (request, response) => {

  pool.query('SELECT FIGUREID, FIGURENAME, ILLUSTRATION FROM FIGURE', (error, results) => {
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

const getAllUsers = (request, response) => {

    pool.query('SELECT * FROM USERS', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUserInfoByID = (request, response) => {
  const UserId = request.params.userid
}

module.exports = {
  getUserByAuth,
  getAllUsers,

  getFigureById,
  getFigureCatalogue


};