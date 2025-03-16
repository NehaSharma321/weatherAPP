const apiKey = 'abf38f218ac62605605690677a6ca2c1'; // Replace with your API key
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const getWeatherButton = document.getElementById('get-weather');

getWeatherButton.addEventListener('click', getWeather);

function getWeather() {
  const city = prompt('Enter city name:');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      cityName.textContent = data.name;
      weatherIcon.src = iconUrl;
      weatherDescription.textContent = data.weather[0].description;
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
    })
    .catch(error => {
      alert('Error fetching weather data!');
    });
}