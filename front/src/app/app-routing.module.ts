import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact-page/contact.component';
import { HomeComponent } from './components/home-page/home.component';
import { RegisterUserComponent } from './components/register-user-page/register-user.component';
import { StatisticsMainComponent } from './components/statistics-page/statistics-main/statistics-main.component';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'feedback', component: ContactComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'statistics', component: StatisticsMainComponent},
  { path: 'login', component: AuthComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
