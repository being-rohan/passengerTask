import { NgModule } from "@angular/core";
import { PassDashboardComponent } from './pass-dashboard/pass-dashboard.component';
import { PasscountComponent } from './pass-dashboard/passcount/passcount.component';
import { PassCardComponent } from './pass-dashboard/pass-card/pass-card.component';
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material/material/material.module";









@NgModule({
    declarations:[
    PassDashboardComponent,
    PasscountComponent,
    PassCardComponent,
   
  ],
    imports:[
      MaterialModule,
      CommonModule],
    exports:[
      PassDashboardComponent],
})


export class PassengerModule{

}