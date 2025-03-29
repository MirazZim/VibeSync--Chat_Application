const createError = require("http-errors");

//404 error handler
function notFoundHandler(req, res, next) {
 next(createError(404, "Your requested content was not found"));
}

//Default error handler
//This function takes the error object created by http-errors
//and renders the error page using the error object's message
//and status
function errorHandler(err, req, res, next) {
  //Set the error data in the response locals
  //This is done so that the error data can be accessed
  //in the error page
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {message: err.message};
  //Set the status code of the response
  //This is done so that the error page can be rendered
  //with the correct status code
  res.status(err.status || 500);
  //Check if the request wants a html response
  if (res.locals.html) {
    //html
    //Render the error page using the error data
    res.render('error', {title: 'Error Page'});
  } else {
    //json
    //Return the error data as a json response
    res.json(res.locals.error);
  }
}

module.exports = {notFoundHandler, errorHandler};
