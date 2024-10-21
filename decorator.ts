interface Coffee {
  cost(): number;
  desc(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }
  desc(): string {
    return "Simple coffee";
  }
}

abstract class CoffeeDecator implements Coffee {
  protected coffee;
  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost();
  }
  desc(): string {
    return this.coffee.desc();
  }
}

class MilkCofee extends CoffeeDecator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  cost(): number {
    return this.coffee.cost() + 3;
  }
  desc(): string {
    return this.coffee.desc() + ", with milk";
  }
}
class CofeeWithCroissant extends CoffeeDecator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  cost(): number {
    return this.coffee.cost() + 1;
  }
  desc(): string {
    return this.coffee.desc() + ", with croissant";
  }
}

let sCoffee = new SimpleCoffee();

console.log("$ " + sCoffee.cost());
console.log(sCoffee.desc());

sCoffee = new MilkCofee(sCoffee);
console.log("$ " + sCoffee.cost());
console.log(sCoffee.desc());
sCoffee = new CofeeWithCroissant(sCoffee);
console.log("$ " + sCoffee.cost());
console.log(sCoffee.desc());
