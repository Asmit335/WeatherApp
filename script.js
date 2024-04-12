const apikey = "12197b23b5a0fad3a2186b0a5bfe60b6"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weatherIcon")

async function checkWeather(city) {
    const resp = await fetch(apiUrl + city + `&appid=${apikey}`)
    let data = await resp.json()
        // console.log(data);

    if (resp.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {



        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%'
        document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h'

        if (data.weather[0] == "Clouds") {
            weathericon.src = '/images/clouds.png'
        } else if (data.weather[0] == "Clear") {
            weathericon.src = '/images/clear.png'
        } else if (data.weather[0] == "Rain") {
            weathericon.src = '/images/rain.png'
        } else if (data.weather[0] == "Drizzle") {
            weathericon.src = '/images/drizzle.png'
        } else if (data.weather[0] == "Mist") {
            weathericon.src = '/images/mist.png'
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"


    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})