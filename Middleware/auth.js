const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // token is in httpOnly cookie named 'token'
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id: userId, iat, exp }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};