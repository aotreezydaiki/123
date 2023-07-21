export default class Waffle {
  constructor(public price: number) {}

  bite(): void {
    console.log('was bite');
    this.price = 0;
  }
}
