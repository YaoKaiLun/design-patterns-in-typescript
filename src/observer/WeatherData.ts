import Observable from './Observable'
import Observer from './Observer'

export default class WeatherData implements  Observable{
  private temperature: number
  private humidity: number
  private observers: Observer[] = []

  addObserver(observer: Observer) {
    this.observers.push(observer)
  }

  removeObserver(observer: Observer) {
    let n:number = this.observers.indexOf(observer)
    this.observers.splice(n, 1)
  }

  notifyObservers() {
    this.observers.forEach((observer) => {
      observer.update()
    })
  }

  setTemperature(temperature: number) {
    this.temperature = temperature
  }

  getTemperature(): number {
    return this.temperature
  }

  setHumidity(humidity: number) {
    this.humidity = humidity
  }

  getHumidity(): number {
    return this.humidity
  }
}