/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
const cityName = document.getElementById("city-name")
const weatherType = document.getElementById("weather-type")
const temperature = document.getElementById("temp")
const minTemp = document.getElementById("min-temp")
const maxTemp = document.getElementById("max-temp")

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = async (cityName) => {

  const WeatherData ={"cityName":"null", "WeatherType":"null", "temperature":"null", "minTemp":"null", "maxTemp":"null"}

  const url = `https://open-weather13.p.rapidapi.com/city/${cityName}`;
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': '3fd23e6a52msh6dc1d2995472845p1fa26cjsnbd35a2a183e6',
  		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  	}
  };
  
  const getWeatherDetails = async () => {
  try {
  	const response = await fetch(url, options);
  	const result = await response.json();
    WeatherData.WeatherType = result.weather[0].main
    WeatherData.temperature = result.main.temp
    console.log(result)
    WeatherData.cityName = result.name 
    WeatherData.minTemp = result.main.temp_min
    WeatherData.maxTemp = result.main.temp_max
  } catch (error) {
  	console.error(error);
  }
  return WeatherData
  }
  const Weatherget = await getWeatherDetails()
  console.log(WeatherData)
  showWeatherData(Weatherget)


  
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE

  cityName.innerText = weatherData.cityName
  weatherType.innerText = weatherData.WeatherType

  temperature.innerText = (((weatherData.temperature)- 32) * 5/9).toFixed(2)
  minTemp.innerText = (((weatherData.minTemp)- 32) * 5/9).toFixed(2)
  maxTemp.innerText = (((weatherData.maxTemp)- 32) * 5/9).toFixed(2)
}








