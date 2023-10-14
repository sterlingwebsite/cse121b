const apiKey = '21557450a347d04d2f5bac054327d98c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
async function getWeatherData(cityName) {
    try {
        const response = await fetch(`${apiUrl}?q=${cityName}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        const temperature = data.main.temp;
        const city = data.name;
        const description = data.weather[0].description;
        document.getElementById('temperature').textContent = temperature + '°C';
        document.getElementById('city').textContent = city;
        document.getElementById('description').textContent = description;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
document.getElementById('weatherButton').addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;
    getWeatherData(cityInput);
});