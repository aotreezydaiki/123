// import BigWaffle from './big-waffle';
// import SmallWaffle from './small-waffle';
import IcecreamContructor from './icecream-constructor';
import Toppings from './toppings.enum';
import Waffle from './waffle';

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomNumber = getRandomInt(1, 20);
console.log('random number is', randomNumber);
// const waffle = randomNumber <= 10 ? new SmallWaffle() : new BigWaffle();
const waffle = new Waffle(randomNumber <= 10 ? 10 : 25);
const icecreamContructor = new IcecreamContructor(waffle);

if (randomNumber <= 3) {
  icecreamContructor.addToping(Toppings.Chocolate);
} else if (randomNumber <= 6) {
  icecreamContructor.addToping(Toppings.Caramel);
} else if (randomNumber <= 10) {
  icecreamContructor.addToping(Toppings.Berries);
} else if (randomNumber <= 13) {
  icecreamContructor.addToping(Toppings.Chocolate);
  icecreamContructor.addToping(Toppings.Chocolate);
  icecreamContructor.addToping(Toppings.Caramel);
} else if (randomNumber <= 16) {
  icecreamContructor.addToping(Toppings.Chocolate);
  icecreamContructor.addToping(Toppings.Berries);
} else {
  icecreamContructor.addToping(Toppings.Berries);
  icecreamContructor.addToping(Toppings.Caramel);
}

if (randomNumber > 10) {
  waffle.bite();
}

icecreamContructor.printInfo();
