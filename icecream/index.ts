import BigWaffle from './big-waffle';
import IcecreamContructor from './icecream-constructor';
import SmallWaffle from './small-waffle';
import Toppings from './toppings.enum';

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomNumber = getRandomInt(1, 20);
const waffle = randomNumber <= 10 ? new SmallWaffle() : new BigWaffle();
const icecreamContructor = new IcecreamContructor(waffle);

if (randomNumber <= 3) {
  console.log('chocolate topping will cost additional 5 uah');
  icecreamContructor.addToping(Toppings.Chocolate);
} else if (randomNumber <= 6) {
  console.log('caramel topping will cost additional 6 uah');
  icecreamContructor.addToping(Toppings.Caramel);
} else if (randomNumber <= 10) {
  console.log('berries topping will cost additional 10 uah');
  icecreamContructor.addToping(Toppings.Berries);
} else if (randomNumber <= 13) {
  console.log('chocolate and caramel toppings will cost additional 11 uah');
  icecreamContructor.addToping(Toppings.Chocolate);
  icecreamContructor.addToping(Toppings.Caramel);
} else if (randomNumber <= 16) {
  console.log('chocolate and berries toppings will cost additional 15 uah');
  icecreamContructor.addToping(Toppings.Chocolate);
  icecreamContructor.addToping(Toppings.Berries);
} else {
  console.log('berries and caramel toppings will cost additional 16 uah');
  icecreamContructor.addToping(Toppings.Berries);
  icecreamContructor.addToping(Toppings.Caramel);
}

console.log(icecreamContructor.totalCost());
