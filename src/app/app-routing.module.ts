import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterNewBeneficiaryComponent } from './pages/register-new-beneficiary/register-new-beneficiary.component';
import { UpdateBeneficiaryComponent } from './pages/update-beneficiary/update-beneficiary.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-beneficiary', component: RegisterNewBeneficiaryComponent},
  {path: 'update-beneficiary', component: UpdateBeneficiaryComponent},
  {path: 'deliveries', component: DeliveryComponent},
  {path: 'deliveries/statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
