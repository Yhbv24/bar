import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {
  @Input() childKegList: Keg[];

  newKeg(name, brand, price, strength, type) {
    var keg = new Keg(name, brand, price, strength, type);
    this.childKegList.push(keg);
  }

  ngOnInit() {
  }

}
