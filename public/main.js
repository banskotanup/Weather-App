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


// const getAddress = async (apiAddr) => {
//     const address = await getWeather(apiAddr).address;
//     return address;
// }

// const getCurrentCondition = (apiAddr) => {
//     getWeather(apiAddr)
//         .then((res) => {
//             return res.currentConditions;
//         });
// }

// const getDescription = (apiAddr) => {
//     getWeather(apiAddr)
//         .then((res) => {
//             return res.description;
//         });
// }

getWeatherBtn.addEventListener("click", async () => {
    const addr = document.querySelector("#addr").value;
    const apiAddr = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${addr}?unitGroup=us&key=SX8KP5K5UA8MVBUULZDQQLW77`;
    
    const weatherData = await getWeather(apiAddr);

    if (!weatherData) return;
    console.log(weatherData);

    window.location.href = "info.html";

    
});

// getDescription();
// getCurrentCondition();
// getAddress();

getStartedBtn.addEventListener("click", async () => {
    document.querySelector("dialog").showModal(); 
});