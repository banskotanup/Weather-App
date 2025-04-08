console.log("hello, world");

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
    console.log(weatherData);

    localStorage.setItem("weatherData", JSON.stringify(weatherData));

    window.location.href = "info.html";

    
});

getStartedBtn?.addEventListener("click", async () => {
    document.querySelector("dialog").showModal(); 
});

console.log(JSON.parse(localStorage.getItem("weatherData")));
const weatherInfo = JSON.parse(localStorage.getItem("weatherData"));

//for info.html

document.querySelector(".addrh3").textContent = weatherInfo.resolvedAddress;
document.querySelector(".cor").textContent = `Chances of rain: ${weatherInfo.currentConditions.precipprob}%`;
document.querySelector(".cur-temp").textContent = `${weatherInfo.currentConditions.temp} °C`;
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
  console.log(hours);
  
});