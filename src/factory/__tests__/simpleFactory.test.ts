import PizzaStore from '../simpleFactory/PizzaStore'
import { ChinesePizzaFactory, IndiaPizzaFactory } from '../simpleFactory/PizzaFactory'
import 'mocha'
import { expect } from 'chai'

describe('simple factory', () => {
  let pizzaStore: PizzaStore

  it('should be Chinese Banana Pizza', () => {
    pizzaStore = new PizzaStore(new ChinesePizzaFactory())
    let pizza = pizzaStore.orderPizza('B')
    expect(pizza.type).to.equal('ChineseBananaPizza')
    expect(pizza.status).to.equal('boxing')
  })

  it('should be India Normal Pizza', () => {
    pizzaStore = new PizzaStore(new IndiaPizzaFactory())
    let pizza = pizzaStore.orderPizza('')
    expect(pizza.type).to.equal('IndiaNormalPizza')
    expect(pizza.status).to.equal('boxing')
  })
});