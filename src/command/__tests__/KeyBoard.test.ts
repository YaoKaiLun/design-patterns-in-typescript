import KeyBoard from '../KeyBoard'
import {MoveUpCommand, MoveDownCommand} from '../Command'
import Point from '../Point'
import 'mocha'
import { expect } from 'chai'

describe('command', () => {
  it('should be move to (0, 1) when up key press', () => {
    let keyBoard = new KeyBoard({})
    let point: Point = {x: 0, y: 0}
    let newPoint = keyBoard.press('up', point)
    expect(newPoint).to.deep.equal({x: 0, y: 1})
  })

  it('should be move to (0, 1) when down key press', () => {
    let keyBoard = new KeyBoard({down: new MoveUpCommand()})
    let point: Point = {x: 0, y: 0}
    let newPoint = keyBoard.press('down', point)
    expect(newPoint).to.deep.equal({x: 0, y: 1})
  })
});