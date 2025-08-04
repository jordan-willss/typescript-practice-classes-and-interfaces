import WeatherResponseClass, { WeatherResponse } from "./WeatherResponseClass";

class WeatherApi {
    apiKey: string = "8cd078c5934447fb0cc6dab176eb19b3";

    async getTheWeather(): Promise<WeatherResponse> {
        return fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=" + this.apiKey)
            .then((res) => {
                return res.json();
            })
            .then((body) => {
                return body as WeatherResponse
            });
    }
}

const weather = new WeatherApi();

weather.getTheWeather().then((response) => {
    const myWeatherClass = new WeatherResponseClass(response);

    // myWeatherClass.tellMeWeather();

    // myWeatherClass.isItHot();

    // myWeatherClass.isItNearSea();

    myWeatherClass.getSunriseDateTime();
});

// Current API response:

const r = 
{
  coord: { lon: 10.99, lat: 44.34 },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d'
    }
  ],
  base: 'stations',
  main: {
    temp: 296.95,
    feels_like: 296.85,
    temp_min: 295.49,
    temp_max: 297.08,
    pressure: 1019,
    humidity: 56,
    sea_level: 1019,
    grnd_level: 953
  },
  visibility: 10000,
  wind: { speed: 2.26, deg: 68, gust: 1.66 },
  clouds: { all: 100 },
  dt: 1754305349,
  sys: {
    type: 2,
    id: 2004688,
    country: 'IT',
    sunrise: 1754280393,
    sunset: 1754332660
  },
  timezone: 7200,
  id: 3163858,
  name: 'Zocca',
  cod: 200
}