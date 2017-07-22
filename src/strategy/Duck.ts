import { FlyFunction } from './Fly'
import { QuackFunction } from './Quack'

export default abstract class Duck {
  flyFunction: FlyFunction
  quackFunction: QuackFunction

  abstract display(): string

  fly():string {
    return this.flyFunction.fly()
  }

  quack():string {
    return this.quackFunction.quack()
  }
}