import Pizza from '../Pizza'

export default abstract class PizzaStore {
  abstract createPizza(type: string): Pizza

  orderPizza(type: string): Pizza {
    let pizza: Pizza = this.createPizza(type)
    pizza.prepare()
    pizza.bake()
    pizza.out()
    pizza.cut()
    pizza.box()
    return pizza
  }
}

export class ChinesePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza
    switch(type) {
      case 'A':
        pizza = new Pizza('ChineseApplePizza')
        break
      case 'B':
        pizza = new Pizza('ChineseBananaPizza')
        break
      case 'C':
        pizza = new Pizza('ChineseCheesePizza')
        break
      default:
        pizza = new Pizza('ChineseNormalPizza')
    }
    return pizza
  }
}

export class IndiaPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    let pizza
    switch(type) {
      case 'A':
        pizza = new Pizza('IndiaApplePizza')
        break
      case 'B':
        pizza = new Pizza('IndiaBananaPizza')
        break
      case 'C':
        pizza = new Pizza('IndiaCheesePizza')
        break
      default:
        pizza = new Pizza('IndiaNormalPizza')
    }
    return pizza
  }
}