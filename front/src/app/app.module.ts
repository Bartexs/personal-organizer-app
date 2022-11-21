import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksListComponent } from './components/user-task-feature/tasks-list/tasks-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './utils/timer/timer.component';
import { TaskComponent } from './components/user-task-feature/task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateNewTaskComponent } from './components/user-task-feature/create-new-task/create-new-task.component';
import { CreateNewSubtaskListComponent } from './components/user-task-feature/create-new-subtask-list/create-new-subtask-list.component';
import { ContactComponent } from './components/contact-page/contact.component';
import { HomeComponent } from './components/home-page/home.component';
import { RegisterUserComponent } from './components/register-user-page/register-user.component';
import { DeleteConfModalComponent } from './components/user-task-feature/delete-conf-modal/delete-conf-modal.component';
import { SuccessNotificationComponent } from './notifications/success-notification/success-notification.component';
import { ModifyModalComponent } from './components/user-task-feature/modify-modal/modify-modal.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
