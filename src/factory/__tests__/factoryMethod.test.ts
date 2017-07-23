import PizzaStore, {ChinesePizzaStore, IndiaPizzaStore } from '../factoryMethod/PizzaStore'
import 'mocha'
import { expect } from 'chai'

describe('factory method', () => {
  let pizzaStore: PizzaStore

  it('should be Chinese Banana Pizza', () => {
    pizzaStore = new ChinesePizzaStore()
    let pizza = pizzaStore.orderPizza('B')
    expect(pizza.type).to.equal('ChineseBananaPizza')
    expect(pizza.status).to.equal('boxing')
  })

  it('should be India Normal Pizza', () => {
    pizzaStore = new IndiaPizzaStore()
    let pizza = pizzaStore.orderPizza('')
    expect(pizza.type).to.equal('IndiaNormalPizza')
    expect(pizza.status).to.equal('boxing')
  })
});