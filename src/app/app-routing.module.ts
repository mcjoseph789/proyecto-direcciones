import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponentComponent } from './components/delivery-component/delivery-component.component';
import { DeliveryDateComponentComponent } from './components/delivery-date-component/delivery-date-component.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'direccionentrega', component: DeliveryComponentComponent },
  { path: 'fechaentrega', component: DeliveryDateComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
