class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
    this.pressure = document.getElementById('w-pressure');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} C`;
    this.icon.setAttribute('src', weather.weather[0].icon);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.dewpoint.textContent = `Lon: ${weather.coord.lon}, Lat: ${weather.coord.lat}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
  }
}
