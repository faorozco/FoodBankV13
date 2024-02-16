import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterNewBeneficiaryComponent } from './pages/register-new-beneficiary/register-new-beneficiary.component';
import { UpdateBeneficiaryComponent } from './pages/update-beneficiary/update-beneficiary.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-beneficiary', component: RegisterNewBeneficiaryComponent},
  {path: 'update-beneficiary', component: UpdateBeneficiaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
