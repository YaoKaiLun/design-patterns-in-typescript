import WeatherData from '../WeatherData'
import {TemperatureDisplay, HumidityDisplay} from '../DisplayElement'
import 'mocha'
import { expect } from 'chai'

describe('observer', () => {
  let weatherData:WeatherData

  before(() => {
    weatherData = new WeatherData()
  })

  it('should update temperature of temerature display', () => {
    let temperatureDisplay = new TemperatureDisplay(weatherData)
    weatherData.setTemperature(30)
    weatherData.notifyObservers()
    expect(temperatureDisplay.display()).to.equal('temperature:30')
  })

  it('should not update temperature of temerature display', () => {
    let temperatureDisplay = new TemperatureDisplay(weatherData)
    weatherData.setTemperature(30)
    weatherData.notifyObservers()
    weatherData.removeObserver(temperatureDisplay)
    weatherData.setTemperature(100)
    expect(temperatureDisplay.display()).to.equal('temperature:30')
  })
});