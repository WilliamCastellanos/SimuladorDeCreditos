import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientsComponent } from './components/homepage/admin-page/clients/clients.component';
import { AddComponent } from './components/homepage/admin-page/clients/add/add.component';
import { EditComponent } from './components/homepage/admin-page/clients/edit/edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CatalogTableComponent } from './components/homepage/admin-page/clients/catalog-table/catalog-table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from "@angular/common/http"
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { UsersComponent } from './components/homepage/admin-page/users/users.component';
import { AddUserComponent } from './components/homepage/admin-page/users/add-user/add-user.component';
import { TableUsersComponent } from './components/homepage/admin-page/users/table-users/table-users.component';
import { AdminPageComponent } from './components/homepage/admin-page/admin-page.component';
import { ClientPageComponent } from './components/homepage/client-page/client-page.component';
import { SimulatorComponent } from './components/homepage/client-page/simulator/simulator.component';
import { DataSimulatorComponent } from './components/homepage/client-page/simulator/data-simulator/data-simulator.component';
import { SettingsComponent } from './components/homepage/admin-page/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AddComponent,
    EditComponent,
    CatalogTableComponent,
    HomepageComponent,
    UsersComponent,
    AddUserComponent,
    TableUsersComponent,
    AdminPageComponent,
    ClientPageComponent,SimulatorComponent, DataSimulatorComponent, SettingsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule, MatCardModule, MatInputModule,
    MatFormFieldModule, MatGridListModule, MatToolbarModule, MatPaginatorModule, MatTableModule,
    HttpClientModule, MatSelectModule, FormsModule, MatDatepickerModule, MatNativeDateModule, RouterModule, MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
