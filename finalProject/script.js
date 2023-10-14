// script.js

const apiKey = '21557450a347d04d2f5bac054327d98c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const weatherData = [];

async function getWeatherData(cityName) {
    try {
        const response = await fetch(`${apiUrl}?q=${cityName}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        // Handle the data and update the DOM
        console.log(data);
        
        // Update the weatherData array with new city data
        weatherData.push({
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description
        });

        // Display the weather data for all cities in the array
        displayWeatherData();
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData() {
    // Clear the previous data
    document.getElementById('weatherList').innerHTML = '';

    // Display weather data for all cities in the array
    weatherData.forEach(city => {
        const listItem = document.createElement('li');
        listItem.textContent = `${city.city}: ${city.temperature}°C, ${city.description}`;
        document.getElementById('weatherList').appendChild(listItem);
    });
}

// Event listener for the button click
document.getElementById('weatherButton').addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;
    getWeatherData(cityInput);
});
