export interface WeatherResponse {
    weather: Array<WeatherResponseWeatherObject>;
    main: WeatherResponseMainObject;
    visibility: number;
    sys: {
        sunrise: number,
        sunset: number
    },
}

interface WeatherResponseWeatherObject {
    id: number,
    main: string,
    description: string,
    icon: string,
}

interface WeatherResponseMainObject {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export default class WeatherResponseClass implements WeatherResponse {
    weather: WeatherResponseWeatherObject[];
    main: WeatherResponseMainObject;
    visibility: number;
    sys: { sunrise: number; sunset: number; };

    constructor(data: WeatherResponse) {
        this.weather = data.weather;
        this.main = data.main;
        this.visibility = data.visibility;
        this.sys = data.sys;
    }

    tellMeWeather() {
        console.log(this.weather[0].main);
    }

    isItHot() {
        if (this.main.temp > 280) {
            console.log("It is hot!");
        } else {
            console.log("It is cold!");
        }

    }

    isItNearSea(){
        if(this.main.sea_level > 1000){
            console.log('It is near sea level')
        }else{
            console.log('Not near sea level')
        }
    }

    getSunriseDateTime() {
        const dateTime = new Date(this.sys.sunrise * 1000);
        console.log(dateTime);
    }

    getSunsetTime(){
        const dateTime1 = new Date(this.sys.sunset * 1000);
        console.log(dateTime1);
    }
}