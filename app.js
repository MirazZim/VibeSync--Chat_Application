// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const {notFoundHandler, errorHandler} = require("./middlewares/Common/errorHandler");

const app = express();
dotenv.config();

// Database connection
mongoose.connect(process.env.MONGO_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set template engine
app.set("view engine", "ejs");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup (add your routes here later)

//404 error handler
app.use(notFoundHandler);
//default error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});