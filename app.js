const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

// Database connection
mongoose.connect(process.env.MONGO_CONNECT)
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

// Error handling (basic example, expand as needed)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});