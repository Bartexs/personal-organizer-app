import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateNewTaskComponent } from './components/create-new-task/create-new-task.component';
import { CreateNewSubtaskListComponent } from './components/create-new-task/create-new-subtask-list/create-new-subtask-list/create-new-subtask-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { DeleteConfModalComponent } from './components/modals/delete-conf-modal/delete-conf-modal.component';
import { SuccessNotificationComponent } from './notifications/success-notification/success-notification.component';
import { ModifyModalComponent } from './components/userTasksFunctionality/modify-modal/modify-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TasksListComponent,
    TaskComponent,
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
