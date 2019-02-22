export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = (data.main.temp - 273.15) * 9 / 5 + 32
    this.overview = data.weather.main
    this.desc = data.weather.desc
    this.humid = data.main.humidity
    this.wind = data.wind.speed

    //(0K − 273.15) × 9/5 + 32
  }
  getTemplate() {
    return `
    <div class="flexin">
			<p><b>${this.city.toUpperCase()}, ID</b></p>
			<p>${this.kelvin.toFixed(0)}°</p>
		</div>
		<h1 class="text-center"><i class="fas fa-thermometer-half"></i></h1>
		<div class="flexin flex-end">
			<p class="mt-3">Wind Speed: ${this.wind}mph</p>
			<p class="mt-3">Humidity: ${this.humid}%</p>
		</div>
    `
  }
}