import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterNewBeneficiaryComponent } from './pages/register-new-beneficiary/register-new-beneficiary.component';
import { UpdateBeneficiaryComponent } from './pages/update-beneficiary/update-beneficiary.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ListBeneficiaryComponent } from './pages/list-beneficiary/list-beneficiary.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-beneficiary', component: RegisterNewBeneficiaryComponent },
  { path: 'update-beneficiary', component: UpdateBeneficiaryComponent },
  { path: 'administration', component: DeliveryComponent },
  { path: 'administration/statistics', component: StatisticsComponent },
  { path: 'list-beneficiaries', component: ListBeneficiaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
