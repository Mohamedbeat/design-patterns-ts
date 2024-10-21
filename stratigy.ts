interface Payment {
  pay(user: User): string;
}

class PaypalPayment implements Payment {
  pay(user: User): string {
    return `user ${user.getName()} paypal peyment => ${user.getMoney()}`;
  }
}
class BankPayment implements Payment {
  pay(user: User): string {
    return `user ${user.getName()} bank peyment => ${user.getMoney()}`;
  }
}

class User {
  private name: string;
  private money: number;

  constructor(name: string, money: number) {
    this.money = money;
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
  getMoney(): number {
    return this.money;
  }

  payment(payment: Payment) {
    return payment.pay(this);
  }
}

const newUser = new User("kinji", 123);
const bank = new BankPayment();
const paypal = new PaypalPayment();

console.log(newUser.payment(bank));
console.log(newUser.payment(paypal));
