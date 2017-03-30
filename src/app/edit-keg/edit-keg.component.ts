import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {
  @Input() childSelectedKeg: Keg;
  @Input() childUser: boolean;

  changeKeg(keg, name, brand, price, strength, type) {
    keg.name = name;
    keg.brand = brand;
    keg.price = price;
    keg.strength = strength;
    keg.type = type;
  }

  ngOnInit() {
  }

}
