const { response } = require("express");
const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let query = req.body.cityName;
  const apikey = "0b778879da45142afaf07bc6ca102520";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&units=" +
    unit +
    "&appid=" +
    apikey;
  console.log(query, url);
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>The temperature in " + query + " is " + temp + "</h1>");
      res.write("<h3>The weather is currently " + description + "</h3>");
      res.write("<img src=" + iconUrl + ">");
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
