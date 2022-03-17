import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/homepage/admin-page/clients/clients.component';
import { EditComponent } from './components/homepage/admin-page/clients/edit/edit.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UsersComponent } from './components/homepage/admin-page/users/users.component';
import { SettingsComponent } from './components/homepage/admin-page/settings/settings.component';
import { SimulatorComponent } from './components/homepage/client-page/simulator/simulator.component';
const routes: Routes = [{ path: '', component: HomepageComponent },
{ path: 'viewClients/edit', component: EditComponent },
{ path: 'viewClients', component: ClientsComponent },
{ path: 'viewUsers', component: UsersComponent},
{ path: 'viewDataSimulator', component: SettingsComponent},
{ path: "viewSimulator", component: SimulatorComponent}];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
