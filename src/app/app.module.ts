import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { CustomerComponent } from './customer/customer.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    CustomerComponent,
    EditKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
