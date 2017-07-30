import IronMan from './IronMan'

export default abstract class ActionState {
  ironMan: IronMan

  constructor(ironMan: IronMan) {
    this.ironMan = ironMan
  }

  abstract description(): string
  onPressDownKey(): void {}
  onReleaseDownKey(): void {}
  onPressUpKey(): void {}
  onPressSpaceKey(): void {}
}

export class StandingState extends ActionState {
  description() {
    return 'stand'
  }

  onPressDownKey(): void {
    this.ironMan.setActionState('duck')
  }

  onPressSpaceKey(): void {
    this.ironMan.setActionState('jump')
  }
}

export class DuckingState extends ActionState {
  description() {
    return 'duck'
  }

  onReleaseDownKey(): void {
    this.ironMan.setActionState('stand')
  }
}

export class JumpingState extends ActionState {
  description() {
    return 'jump'
  }

  onPressDownKey(): void {
    this.ironMan.setActionState('dive')
  }
}

export class DivingState extends ActionState {
  description() {
    return 'dive'
  }

  onReleaseDownKey(): void {
    this.ironMan.setActionState('stand')
  }
}