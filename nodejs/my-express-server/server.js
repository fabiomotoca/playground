//jshint esversion:6

const { request } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>hello!</h1>");
});

app.get("/contact", (request, response) => {
  response.send("<h1>hello contact</h1>");
});

app.get("/about", (request, response) => {
    response.send("Hello! My name is Fabio and I like to study, beer, bacon and anime!");
  });

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
