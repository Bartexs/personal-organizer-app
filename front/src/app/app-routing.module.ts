import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact-page/contact.component';
import { HomeComponent } from './components/home-page/home.component';
import { RegisterUserComponent } from './components/register-user-page/register-user.component';
import { StatisticsMainComponent } from './components/statistics-page/statistics-main/statistics-main.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'feedback', component: ContactComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'statistics', component: StatisticsMainComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
