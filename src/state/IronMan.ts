import ActionState, {StandingState, DuckingState, JumpingState, DivingState} from './ActionState'

export default class IronMan {
  actionState: ActionState
  standingState: ActionState
  duckingState: ActionState
  jumpingState: ActionState
  divingState: ActionState

  constructor() {
    this.standingState = new StandingState(this)
    this.duckingState = new DuckingState(this)
    this.jumpingState = new JumpingState(this)
    this.divingState = new DivingState(this)
    this.actionState = this.standingState
  }

  setActionState(action: String) {
    switch (action) {
      case 'stand':
        this.actionState = this.standingState
        break;
      case 'duck':
        this.actionState = this.duckingState
        break;
      case 'jump':
        this.actionState = this.jumpingState
        break;
      case 'dive':
        this.actionState = this.divingState
        break;
      default:
        break;
    }
  }

  handle(type: string, key: string) {
    if (type === 'press') {
      switch (key) {
        case 'down':
          this.actionState.onPressDownKey()
          break;
        case 'up':
          this.actionState.onPressUpKey()
          break;
        case 'space':
          this.actionState.onPressSpaceKey()
          break;
        default:
          break;
      }
    } else if (type === 'release') {
      switch (key) {
        case 'down':
          this.actionState.onReleaseDownKey()
          break;
        default:
          break;
      }
    }
  }
}