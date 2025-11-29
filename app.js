const apikey = "6120a31b7ccd79685c770a5a71561056";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

// let city = document.querySelector(".cityname").value;
// console.log(city);
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp - 273.15) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      icon.src = "weather-app-img/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "weather-app-img/images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "weather-app-img/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "weather-app-img/images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "weather-app-img/images/snow.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "weather-app-img/images/rain.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
