
const getWeatherBtn = document.querySelector(".getWeather");
const getStartedBtn = document.querySelector(".getStarted");

const getWeather = async (apiAddr) => {
    const res = await fetch(apiAddr, {
        mode: "cors"
    });
    const data = res.json();

    return data;
}


getWeatherBtn?.addEventListener("click", async () => {
    const addr = document.querySelector("#addr").value;
    const apiAddr = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${addr}?unitGroup=metric&key=SX8KP5K5UA8MVBUULZDQQLW77`;
    
    const weatherData = await getWeather(apiAddr);

    if (!weatherData) return;
    localStorage.setItem("weatherData", JSON.stringify(weatherData));

    window.location.href = "info.html";

    
});

getStartedBtn?.addEventListener("click", async () => {
    document.querySelector("dialog").showModal(); 
});

const btnSearch = document.querySelector(".btnSearch");
btnSearch?.addEventListener("click", async() => {
  const addr = document.querySelector("#search").value;
  const apiAddr = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${addr}?unitGroup=metric&key=SX8KP5K5UA8MVBUULZDQQLW77`;
  
  const weatherData = await getWeather(apiAddr);

  if (!weatherData) return;
  localStorage.setItem("weatherData", JSON.stringify(weatherData));
  location.reload();
});

const weatherInfo = JSON.parse(localStorage.getItem("weatherData"));

//for info.html

document.querySelector(".addrh3").textContent = weatherInfo.resolvedAddress;
document.querySelector(".cor").textContent = `Chances of rain: ${weatherInfo.currentConditions.precipprob}%`;
document.querySelector(".cur-temp").textContent = `${weatherInfo.currentConditions.temp} °C`;
document.querySelector(".cur-img").src = `./public/images/icons/${weatherInfo.currentConditions.icon}.png`;
document.querySelector(".feelslike").textContent = `${weatherInfo.currentConditions.feelslike} °C`;
document.querySelector(".uvindex").textContent = weatherInfo.currentConditions.uvindex;
document.querySelector(".humidity").textContent = `${weatherInfo.currentConditions.humidity}%`;
document.querySelector(".windspeed").textContent = `${weatherInfo.currentConditions.windspeed} km/h SSW`;
// document.querySelector(".time-temp6").textContent = `${weatherInfo.days[0].hours[6].temp}°C`;
// document.querySelector(".time-temp9").textContent = `${weatherInfo.days[0].hours[9].temp}°C`;
// document.querySelector(".time-temp12").textContent = `${weatherInfo.days[0].hours[12].temp}°C`;
// document.querySelector(".time-temp15").textContent = `${weatherInfo.days[0].hours[15].temp}°C`;
// document.querySelector(".time-temp18").textContent = `${weatherInfo.days[0].hours[18].temp}°C`;
// document.querySelector(".time-temp21").textContent = `${weatherInfo.days[0].hours[21].temp}°C`;

// console.log(weatherInfo.days[0].hours[21].icon);

const hourlyData = weatherInfo.days[0].hours; // Getting today's hourly data

const filteredHour = hourlyData.filter(hour => {
  const hourInt = parseInt(hour.datetime.split(":")[0], 10);
  return hourInt >= 6 && hourInt <= 21 && hourInt % 3 === 0;
});

filteredHour.forEach((hours, index) => {
  const time = document.querySelector(`.time-temp${index * 3 + 6}`);
  time.textContent = `${hours.temp}°C`;
  document.querySelector(`.img${index * 3 + 6}`).src = `./public/images/icons/${hours.icon}.png`;
});

const dailyData = weatherInfo.days;
console.log(dailyData);

const now = new Date();
now.setHours(0, 0, 0, 0);
const nowEpoch = now.getTime() / 1000;
const oneWeekLater = nowEpoch + 6 * 24 * 60 * 60;

const filterDaily = dailyData.filter((day) => {
  return day.datetimeEpoch >= nowEpoch && day.datetimeEpoch <= oneWeekLater;
});

console.log(filterDaily);

filterDaily.forEach((day, index) => {
  const date = new Date(day.datetimeEpoch * 1000);
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
  document.querySelector(`.temp-max-min${index + 1}`).innerHTML = `${(day.tempmax).toFixed(0)}<span>/${(day.tempmin).toFixed(0)}°C</span>`
  document.querySelector(`.info${index + 1}`).textContent = day.conditions;
  document.querySelector(`.right-img${index + 1}`).src = `./public/images/icons/${day.icon}.png`;
  document.querySelector(`.day${index + 1}`).textContent = weekday;
});

function openDialog() {
  document.querySelector(".home-body").classList.add("blur");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("dialog").close();
});