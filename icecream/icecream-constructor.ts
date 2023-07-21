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
    console.log('waffle price is', this.waffle.price);
    console.log('toppings:');
    this.toppings.forEach((topping) => {
      console.log('topping:', Toppings[topping], 'price:', topping);
    });
    console.log('total cost:', this.totalCost());
  }
}
