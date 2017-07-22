export interface QuackFunction {
  quack():string
}

export class Squeak implements QuackFunction {
  quack():string {
    return 'squeak'
  }
}

export class MuteQuack implements QuackFunction {
  quack():string {
    return 'mute quack'
  }
}