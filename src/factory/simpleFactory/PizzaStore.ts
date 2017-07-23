import PizzaFactory from './PizzaFactory'
import Pizza from '../Pizza'

export default class PizzaStore {
  pizzaFactory:PizzaFactory

  constructor(pizzaFactory: PizzaFactory) {
    this.pizzaFactory = pizzaFactory
  }

  orderPizza(type: string): Pizza {
    let pizza: Pizza = this.pizzaFactory.createPizza(type)
    pizza.prepare()
    pizza.bake()
    pizza.out()
    pizza.cut()
    pizza.box()
    return pizza
  }
}