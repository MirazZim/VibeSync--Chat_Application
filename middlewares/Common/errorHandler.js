const createError = require("http-errors");

//404 error handler
function notFoundHandler(req, res, next) {
 next(createError(404, "your requested content Not Found"));
}

//default error handler
function errorHandler(err, req, res, next) {
  res.render('error',{
    title: 'Error Page'
  });
}

module.exports = {notFoundHandler, errorHandler};
