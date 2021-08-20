const ui = new UI();
const storage = new Storage();
const weatherlocation = storage.getLocationData();
const weather = new Weather(weatherlocation.city, weatherlocation.state);

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.chageLocation(city, state);

  storage.setLocationData(city, state);

  getWeather();

  $('#locModal').modal('hide');
  $('#locModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
  });
});

function getWeather() {
  weather
    .getWeather()
    .then((data) => {
      ui.paint(data);
    })
    .catch((err) => console.log(err));
}
