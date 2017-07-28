import Observer from './Observer'

export default interface Observable {
  addObserver(observer: Observer): void
  removeObserver(observer: Observer): void
  notifyObservers():void
}