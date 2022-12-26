import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from './components/user-task-feature/tasks-list/tasks-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './utils/timer/timer.component';
import { TaskComponent } from './components/user-task-feature/task/task.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateNewTaskComponent } from './components/user-task-feature/create-new-task-modal/create-new-task-modal.component';
import { CreateNewSubtaskListComponent } from './components/user-task-feature/create-new-subtask-list/create-new-subtask-list.component';
import { ContactComponent } from './components/contact-page/contact.component';
import { HomeComponent } from './components/home-page/home.component';
import { RegisterUserComponent } from './components/register-user-page/register-user.component';
import { DeleteConfModalComponent } from './components/user-task-feature/delete-conf-modal/delete-conf-modal.component';
import { SuccessNotificationComponent } from './notifications/success-notification/success-notification.component';
import { ModifyModalComponent } from './components/user-task-feature/modify-modal/modify-modal.component';
import { CreateNewTaskSimplifiedComponent } from './components/user-task-feature/create-new-task-simplified/create-new-task-simplified.component';
import { UserTaskControllerComponent } from './components/user-task-feature/user-task-controller/user-task-controller.component';
import { UserTaskHeaderComponent } from './components/user-task-feature/user-task-header/user-task-header.component';
import { UserTasksAllScheduledListComponent } from './components/user-task-feature/user-tasks-all-scheduled-list/user-tasks-all-scheduled-list.component';
import { UserTasksDateScheduledListComponent } from './components/user-task-feature/user-tasks-date-scheduled-list/user-tasks-date-scheduled-list.component';
import { UserTasksDateCompletedListComponent } from './components/user-task-feature/user-tasks-date-completed-list/user-tasks-date-completed-list.component';
import { NotificationsComponent } from './notifications/notifications-list/notifications-list.component';
import { NotificationComponent } from './notifications/notification/notification.component';
import { StatisticsMainComponent } from './components/statistics-page/statistics-main/statistics-main.component';
import { AuthComponent } from './auth/auth.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TaskComponent,
    TasksListComponent,
    CreateNewTaskComponent,
    CreateNewSubtaskListComponent,
    ContactComponent,
    HomeComponent,
    RegisterUserComponent,
    DeleteConfModalComponent,
    SuccessNotificationComponent,
    ModifyModalComponent,
    CreateNewTaskSimplifiedComponent,
    UserTaskControllerComponent,
    UserTaskHeaderComponent,
    UserTasksAllScheduledListComponent,
    UserTasksDateScheduledListComponent,
    UserTasksDateCompletedListComponent,
    NotificationsComponent,
    NotificationComponent,
    StatisticsMainComponent,
    AuthComponent,
    NavBarComponent,
    FooterComponent,
    LandingPageComponent,
    SettingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
