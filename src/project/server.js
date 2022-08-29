const express = require("express");

//extracting colors package
const colors = require("colors");

const dotenv = require("dotenv").config();

//importing error handler
const { errorHandler } = require("./project.errorMiddleware");

//importing database
const connectDB = require("./project.db");

const port = process.env.port || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/projectManagement", require("./project.router"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
