import ActionState from '../ActionState'
import IronMan from '../IronMan'
import 'mocha'
import { expect } from 'chai'

describe('state', () => {
  it('should be standing to jumping when space was pressed', () => {
    let ironMan = new IronMan()
    ironMan.handle('press', 'space')
    expect(ironMan.actionState.description()).to.equal('jump')
  })

  it('should be jumping to diving when arrow down was pressed', () => {
    let ironMan = new IronMan()
    ironMan.handle('press', 'space')
    ironMan.handle('press', 'down')
    expect(ironMan.actionState.description()).to.equal('dive')
  })

  it('should be diving to standing when arrow down was released', () => {
    let ironMan = new IronMan()
    ironMan.handle('press', 'space')
    ironMan.handle('press', 'down')
    ironMan.handle('release', 'down')
    expect(ironMan.actionState.description()).to.equal('stand')
  })
});