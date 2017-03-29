import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  kegs: Keg[] = [
    new Keg("Bud Light", "Budweiser", 4, 4, "Lager"),
    new Keg("pub drought", "Guinness", 5, 4, "Stout"),
    new Keg("Boch", "Shiner", 6, 4, "Lager"),
    new Keg("Rpm", "Boneyard", 7, 6, "ipa"),
  ];
  user: boolean = false;

  priceColor(keg) {
    if (keg.price <= 3) {
      return "red";
    } else if (keg.price <= 5) {
      return "green";
    } else {
      return "blue";
    }
  }

  strength(keg) {
    if (keg.strength >= 6) {
      return "strong";
    } else {
      return "weak";
    }
  }

  userChange() {
    if (this.user === false) {
      this.user = true;
    } else {
    this.user = false;
    }
    console.log(this.user);
  }
}

export class Keg {
  volume: number = 124;

  constructor(public name: string, public brand: string, public price: number, public strength: number, public type: string) {}
}
