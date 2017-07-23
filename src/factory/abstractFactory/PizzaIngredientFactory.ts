class Dough {

}

class ChineseDough extends Dough {

}

class Sauce {

}

class ChineseSauce extends Sauce {

}

interface PizzaIngredientFactory {
  createDough(): Dough
  createSauce(): Sauce
}

class ChinesePizzaIngredientFactory implements PizzaIngredientFactory{
  createDough() {
    return new ChineseDough()
  }

  createSauce() {
    return new ChineseSauce()
  }
}