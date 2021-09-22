import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TransfersComponent } from './components/transfers/transfers.component';

const routes: Routes = [
  {path:'accounts',component:AccountsComponent},
  {path:'transfers',component:TransfersComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents=[AccountsComponent,TransfersComponent]
