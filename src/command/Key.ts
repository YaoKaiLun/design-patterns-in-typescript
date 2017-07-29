import Command from './Command'

export default interface Key {
  setCommand(command: Command):void
  press():void
}