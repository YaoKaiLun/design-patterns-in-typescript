import Duck from '../Duck'
import SbDuck from '../SbDuck'
import 'mocha'
import { expect } from 'chai'

describe('strategy', () => {
  let sbDuck: Duck

  before(() => {
    sbDuck = new SbDuck()
  })

  it('should be "fly with wings"', () => {
    expect(sbDuck.fly()).to.equal('fly with wings')
  })

  it('should be "mute quack"', () => {
    expect(sbDuck.quack()).to.equal('mute quack')
  })
});