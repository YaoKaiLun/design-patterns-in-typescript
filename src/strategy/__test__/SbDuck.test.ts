import Duck from '../Duck'
import SbDuck from '../SbDuck'
import 'mocha'
import { expect } from 'chai'

describe('SbDuck', () => {
  let sbDuck:Duck

  before(() => {
    sbDuck = new SbDuck()
  })

  it('fly with wings', () => {
    expect(sbDuck.fly()).to.equal('fly with wings')
  })

  it('mute quack', () => {
    expect(sbDuck.quack()).to.equal('mute quack')
  })
});