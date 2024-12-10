var month = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

var day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();
document.getElementById("date").innerHTML = d.getDate();
document.getElementById("month").innerHTML = month[d.getMonth()];
document.getElementById("day").innerHTML = day[d.getDay()];

let cityName = "Mannargudi";

function Searchcity() {
  cityName = document.getElementById("city").value.trim();

  run();
}

var temp;
let nice;
const apiKey = "0cefbdd8089c7b724b58eac94e84c704";

function run() {
  let city = cityName;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      nice = data.weather[0].main;
      document.getElementById("nice").innerHTML = nice;
      city = data.name;
      document.getElementById("name").innerHTML = "Weather Today At  " + city;
      temp = data.main.temp;
      temp -= 273.15;
      document.getElementById("temp").innerHTML = Math.floor(temp);
    })
    .catch((error) => alert("Enter Correct City Name"));
}
run();
