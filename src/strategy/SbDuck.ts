import Duck from './Duck'
import { FlyWithWings } from './Fly'
import { MuteQuack } from './Quack'

export default class SbDuck extends Duck {
  constructor() {
    super()
    this.flyFunction = new FlyWithWings()
    this.quackFunction = new MuteQuack()
  }

  display():string {
    return 'mallar'
  }
}