import { weather_data } from './data.js';

let chooseDay = ()=>{
    let element = document.getElementById("dropdownMenuButton");

    element.addEventListener('change', (event) => {
    let selectedValue = event.target.value;
    loadDayForecastData(selectedValue);
});
}

let loadDayForecastData = (value) => {
    let cityName;
    switch (value){
        case 'guayaquil':
            cityName = weather_data[0];
            break;
        case 'ambato':
            cityName = weather_data[1];
            break;
        case 'tena':
            cityName = weather_data[2];
            break;
    }
    let tag_city = document.getElementById('city');
    let tag_min = document.getElementById('mintemperature');
    let tag_max = document.getElementById('maxtemperature');
    let tag_cloud = document.getElementById('cloudiness');
    let tag_wind = document.getElementById('wind');
    let tag_date = document.getElementById('date');
    let tag_rain = document.getElementById('rainfall');

    let tag_icon_late = document.getElementById('late_icon');
    let tag_icon_night = document.getElementById('night_icon');
    let tag_late_temp = document.getElementById('late_temperature');
    let tag_night_temp = document.getElementById('night_temperature');
    let tag_late_fc = document.getElementById('late_forecast');
    let tag_night_fc = document.getElementById('night_forecast');
    let tag_late_text = document.getElementById('late_text');
    let tag_night_text = document.getElementById('night_text');

    let {city, cloudiness, date, wind, rainfall, maxtemperature, mintemperature, forecast_today, ...otherData } = cityName;
    let [late, night] = forecast_today;
    let { forecast: forecast_late, text: text_late, temperature: temperature_late, icon: icon_late } = late;
    let { forecast: forecast_night, text: text_night, temperature: temperature_night, icon: icon_night } = night;

    tag_city.innerHTML = city;
    tag_max.innerHTML = maxtemperature;
    tag_min.innerHTML = mintemperature;
    tag_cloud.innerHTML = cloudiness;
    tag_wind.innerHTML = wind;
    tag_date.innerHTML = date;
    tag_rain.innerHTML = rainfall;
    tag_icon_late.innerHTML = icon_late;
    tag_icon_night.innerHTML = icon_night;
    tag_late_temp.innerHTML = temperature_late;
    tag_night_temp.innerHTML = temperature_night;
    tag_late_fc.innerHTML = forecast_late;
    tag_night_fc.innerHTML = forecast_night;
    tag_late_text.innerHTML = text_late;
    tag_night_text.innerHTML = text_night;
}

let loadWeekForecastData = () => {
    let forecast_data = document.getElementsByClassName('list-group')[0];

    let [city1, ...otherCities] = weather_data;
    let { forecast_week } = city1;
    let [day1, day2, day3, day4, day5, day6, day7] = forecast_week;
    let { date, icon, text, temperature } = day1;
    let { min, max } = temperature;

    let message = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
      <span class="text-xs">${date}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${max}</span> |  <span class="text-dark mx-2">${min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
    </div>
  </li>`;

    forecast_data.innerHTML = message;
}

let options = () =>{
    let select = document.getElementById('dropdownMenuButton');

    select.innerHTML = `<option value="" selected disabled hidden>Seleccione una ciudad</option>
    <option class="dropdown-item" value="guayaquil">Guayaquil</option>
    <option class="dropdown-item" value="ambato">Ambato</option>
    <option class="dropdown-item" value="tena">Tena</option>`;
}

options();
document.addEventListener("DOMContentLoaded", (event) => {
    chooseDay();
    let element = document.getElementById("loadinfo");

    element.addEventListener('click', (event) => {
        loadWeekForecastData();
});    
});