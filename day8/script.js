const cities = [
    {
        name:"Delhi",
        lat:28.6139,
        lon:77.2090
    },
    {
        name:"Mumbai",
        lat:19.0760,
        lon:72.8777
    },
    {
        name:"Kolkata",
        lat:22.5726,
        lon:88.3639
    }
]

const container = document.getElementById("weather")
const loading = document.getElementById("loading")

function getWeather(city){

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`

    return fetch(url)
    .then(res => res.json())
    .then(data => ({
        city: city.name,
        temp: data.current_weather.temperature,
        code: data.current_weather.weathercode
    }))
}

function getEmoji(code){

    if(code === 0) return "☀️"
    if(code <= 3) return "🌤️"
    if(code <= 48) return "☁️"
    if(code <= 67) return "🌧️"
    if(code <= 77) return "❄️"

    return "🌡️"
}


Promise.all(cities.map(getWeather))
.then(results => {

    loading.style.display = "none"

    results.forEach(city => {

        const card = document.createElement("div")
        card.className = "card"

        card.innerHTML = `
        <h3>${city.city}</h3>
        <p style="font-size:40px">${getEmoji(city.code)}</p>
        <p>${city.temp}°C</p>
        `

        container.appendChild(card)

    })

})
.catch(err => {

    loading.textContent = "Error fetching weather"

})