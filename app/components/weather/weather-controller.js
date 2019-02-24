import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let template = ''
	let weather = _weatherService.Weather
	template = weather.getTemplate()
	document.getElementById('weather').innerHTML = template
}

export default class WeatherController {
	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
