import Key from './Key'
import Command, {MoveUpCommand, MoveDownCommand} from './Command'
import Point from './Point'

interface map {
  [keyName: string]: Command,
}

export default class Keyboard {
  keys: map

  constructor (settings: map) {
    this.initKeys()
    this.configKeys(settings)
  }

  initKeys = () => {
    this.keys = {}
    this.keys['up'] = new MoveUpCommand()
    this.keys['down'] = new MoveDownCommand()
  }

  configKeys = (settings: map) => {
    Object.keys(settings).forEach((key) => {
      if (this.keys[key]) {
        this.keys[key] = settings[key]
      }
    })
  }

  press = (key: string, point: Point) => {
    if (this.keys[key]) {
      return this.keys[key].execute(point)
    }
  }
}