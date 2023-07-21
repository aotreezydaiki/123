const smallwaffle = 10;
const bigwaffle = 25;
const chocolate = 5;
const caramel = 6;
const berries = 10;

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Icecream {
  randomNumber: number;

  constructor() {
    this.randomNumber = getRandomInt(1, 20);
  }

  private wafflecost(): number {
    if (this.randomNumber < 10) {
      console.log('Smallwaffle will cost 10 uah');
      return smallwaffle;
    } else {
      console.log('Bigwaffle will cost 25 uah');
      return bigwaffle;
    }
  }

  private toppingcost(): number {
    if (this.randomNumber <= 3) {
      console.log('chocolate topping will cost additional 5 uah');
      return chocolate;
    }

    if (this.randomNumber <= 6) {
      let toppingPrice = caramel;
      console.log('caramel topping will cost additional 6 uah');
      return toppingPrice;
    }

    if (this.randomNumber <= 10) {
      let toppingPrice = berries;
      console.log('berries topping will cost additional 10 uah');
      return toppingPrice;
    }

    if (this.randomNumber <= 13) {
      let toppingPrice = chocolate + caramel;
      console.log('chocolate and caramel toppings will cost additional 11 uah');
      return toppingPrice;
    }

    if (this.randomNumber <= 16) {
      let toppingPrice = chocolate + berries;
      console.log('chocolate and berries toppings will cost additional 15 uah');
      return toppingPrice;
    }

    let toppingPrice = berries + caramel;
    console.log('berries and caramel toppings will cost additional 16 uah');
    return toppingPrice;
  }

  private add(toppingPrice: number, wafflePrice: number): number {
    return toppingPrice + wafflePrice;
  }

  totalcost(): number {
    let totalPrice = this.add(this.toppingcost(), this.wafflecost());
    return totalPrice;
  }
}

const iceCream = new Icecream();
let totalPrice = iceCream.totalcost();
console.log('Total price:' + totalPrice + 'uah');
