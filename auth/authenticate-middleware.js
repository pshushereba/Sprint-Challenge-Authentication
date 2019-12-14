/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
    
  const token = req.headers.authorization.split(' ')[1];
  
  if (req.decodedJwt) { // will check for a token that is already authorized.
    next();
  } else if (token && (token !== undefined)) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedJwt) => {
      if (err) {
        res.status(401).json({ you: 'shall not pass!' });
      } else {
        req.decodedJwt = decodedJwt;
        next();
      }
    });
  } else {
    res.status(401).json({ you: 'shall not pass!' });
  }
};
