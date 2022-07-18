import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../layout/layout.component';
import { HomeComponent } from '../home/home.component';
import { LoginFormComponent } from '../login/login-form/login-form.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginFormComponent },
      { path: '**', redirectTo: '' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
