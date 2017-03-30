export class Keg {
  volume: number = 124;
  edit: boolean = false;
  revenue: number = 0;

  constructor(public name: string, public brand: string, public price: number, public strength: number, public type: string) {}

}
