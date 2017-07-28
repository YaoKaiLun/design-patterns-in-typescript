import Observer from './Observer'
import Observable from './Observable'
import WeatherData from './WeatherData'

interface DisplayElement {
  display(): string
}

export class TemperatureDisplay implements Observer, DisplayElement {
  private weatherData:WeatherData
  private temperature:number

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    weatherData.addObserver(this)
  }

  update() {
    this.temperature = this.weatherData.getTemperature()
  }

  display() {
    return 'temperature:' + this.temperature
  }
}

export class HumidityDisplay implements Observer, DisplayElement {
  private weatherData:WeatherData
  private humidity:number

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    weatherData.addObserver(this)
  }

  update() {
    this.humidity = this.weatherData.getHumidity()
  }

  display() {
    return 'humidity:' + this.humidity
  }
}