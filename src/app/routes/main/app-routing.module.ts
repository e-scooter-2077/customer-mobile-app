import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { LoginFormComponent } from '../login/login-form/login-form.component';
import { CurrentRentComponent } from '../rent/current-rent/current-rent.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'map', component: HomeComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'rent', component: CurrentRentComponent },
      { path: '**', redirectTo: 'map' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
