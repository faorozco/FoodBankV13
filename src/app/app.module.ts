import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterNewBeneficiaryComponent } from './pages/register-new-beneficiary/register-new-beneficiary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { AlertComponent } from './components/alert/alert.component';
import { FormComponent } from './components/form/form.component';
import { UpdateBeneficiaryComponent } from './pages/update-beneficiary/update-beneficiary.component';
import { TitleComponent } from './components/title/title.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { ListBeneficiaryComponent } from './pages/list-beneficiary/list-beneficiary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterNewBeneficiaryComponent,
    ModalComponent,
    AlertComponent,
    FormComponent,
    UpdateBeneficiaryComponent,
    TitleComponent,
    DeliveryComponent,
    StatisticsComponent,
    CardButtonComponent,
    ListBeneficiaryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
