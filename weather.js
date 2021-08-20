class Weather {
  constructor(city, state) {
    this.apiKey = '';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`
    );

    const data = await res.json();

    return data;
  }

  chageLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
