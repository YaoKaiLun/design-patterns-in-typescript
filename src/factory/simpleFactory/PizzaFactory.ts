import Pizza from '../Pizza'

export default abstract class PizzaFactory {
  abstract createPizza(type: string): Pizza
}

export class ChinesePizzaFactory extends PizzaFactory {
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

export class IndiaPizzaFactory extends PizzaFactory {
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