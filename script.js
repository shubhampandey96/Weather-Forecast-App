// Query selectors
const cityInput = document.querySelector(".city-input");  // Correct variable name (camelCase)
const searchButton = document.querySelector(".search-btn");   // The button to trigger the search

const API_KEY = "";
// Function to get city coordinates
const getWeatherDetails(name, lat, lon) => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        console.log(data);
        const uniqueForecastDays = [];
        const fiveDaysForecast = data.list.filter(forecast => {
            data.list.filter(forecast => {
                const forecastDate = new Date(forecast.dt_txt).getDate();
                if (!uniqueForecastDays.includes(forecastDate)) {
                    return uniqueForecastDays.push(forecastDate);
                }
            });

            console.log(fiveDaysForecast);
        }).catch(() => {
            alert("an error occured while fetching the weather forecast!");
        });

    }

const getCityCoordinates = () => {
        const cityName = cityInput.value.trim();  // Get the value from the input field and remove extra spaces
        if (!cityName) return;  // Return early if the city name is empty
        const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

        // get entered city coordniate (latitude ,longitude and name) from extra spaces 
        if (!cityName) return;// Return if cityName is empty
        fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
            if (!data.length) return alert("No coordinate found for ${cityName}");
            const { name, lat, lon } = data[0];
        getWeatherDetails{ name, lat, lon } = data[0];

        }).catch(() => {
            alert("an error occured while fetching the coordinates!");
            getWeatherDetails(name, lat, lon);


        });
    };

    // Add event listener to the search button
    searchButton.addEventListener("click", getCityCoordinates);  // Correct the event name and function reference
