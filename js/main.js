fetch('https://api.openweathermap.org/data/2.5/weather?q=Grozny,RU&units=metric&appid=a77b9f2616cdc1cc9b61a0aa0ba72e5f')
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.deg').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.weather').textContent = data.weather[0]['description'];
    document.querySelector('.icons').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" alt="" />`;
  })
  .catch(function () {

  });

// http://openweathermap.org/img.wn.04d@2x.png

// a77b9f2616cdc1cc9b61a0aa0ba72e5f