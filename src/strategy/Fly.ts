export interface FlyFunction {
  fly():string
}

export class FlyWithWings implements FlyFunction {
  fly():string {
    return 'fly with wings'
  }
}

export class FlyNoWay implements FlyFunction {
  fly():string {
    return 'fly no way'
  }
}