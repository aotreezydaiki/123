import Price from './price.interface';
import Toppings from './toppings.enum';

export default class IcecreamContructor {
  toppings: Toppings[] = [];

  constructor(public waffle: Price) {}

  setWaffle(waffle: Price): void {
    this.waffle = waffle;
  }

  addToping(topping: Toppings): void {
    this.toppings.push(topping);
  }

  totalCost(): number {
    return (
      this.waffle.price +
      this.toppings.reduce((acc: number, topping: Toppings) => {
        return acc + topping;
      }, 0)
    );
  }

  printInfo(): void {
    const uniqueToppings = new Set(this.toppings);
    const toppingsQty = this.toppings.reduce(
      (acc: Map<Toppings, number>, topping: Toppings) => {
        const qty = acc.get(topping) || 0;
        acc.set(topping, qty + 1);
        return acc;
      },
      new Map<Toppings, number>()
    );

    console.log('waffle price is', this.waffle.price);
    console.log('toppings:');
    uniqueToppings.forEach((topping) => {
      console.log(
        'topping:',
        Toppings[topping],
        'price:',
        toppingsQty.get(topping),
        'x',
        topping
      );
    });
    console.log('total cost:', this.totalCost());
  }
}
