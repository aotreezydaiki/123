

const smallwaffle = 10;
const bigwaffle = 25;
const chocolate = 5;
const caramel = 6;
const berries = 10;

class Icecream {
    getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
     randomnumber = this.getRandomInt(1,20);
      
    wafflecost():number{
        if(this.randomnumber < 10){
            let wafflePrice = smallwaffle
            console.log('Smallwaffle will cost 10 uah'); 
            return wafflePrice;
        }
        else{
        let wafflePrice = bigwaffle
           console.log('Bigwaffle will cost 25 uah');
           return wafflePrice;
        }
    }
    private toppingcost():number{
        if(this.randomnumber <= 3){
            let toppingPrice = chocolate
            console.log('chocolate topping will cost additional 5 uah');
            return toppingPrice;
        }
        if(this.randomnumber <= 6){
            let toppingPrice = caramel
            console.log('caramel topping will cost additional 6 uah');
            return toppingPrice;
        }
        if(this.randomnumber <= 10){
            let toppingPrice = berries
            console.log('berries topping will cost additional 10 uah');
            return toppingPrice;
        }
        if(this.randomnumber <= 13){
            let toppingPrice = chocolate + caramel
            console.log('chocolate and caramel toppings will cost additional 11 uah')
            return toppingPrice;
        }
        if(this.randomnumber <= 16){
            let toppingPrice = chocolate + berries
            console.log('chocolate and berries toppings will cost additional 15 uah');
            return toppingPrice;
        }
        else{
            let toppingPrice = berries + caramel
            console.log('berries and caramel toppings will cost additional 16 uah');
            return toppingPrice;
        }
    }
    private add(toppingPrice: number, wafflePrice: number): number {
        return toppingPrice + wafflePrice;
      }
    totalcost(){
        let totalPrice = this.add(this.toppingcost(),this.wafflecost())
        return totalPrice
    }
}


const iceCream = new Icecream();
let totalPrice = iceCream.totalcost();
console.log('Total price:' + totalPrice + 'uah');






