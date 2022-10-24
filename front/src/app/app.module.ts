import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { HabitsListComponent } from './components/habits-list/habits-list.component';
import { HabitComponent } from './components/habit/habit.component';
import { CreateNewHabitComponent } from './components/create-new-habit/create-new-habit.component';
import { CreateNewTaskComponent } from './components/create-new-task/create-new-task.component';
import { CreateNewSubtaskListComponent } from './components/create-new-task/create-new-subtask-list/create-new-subtask-list/create-new-subtask-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TasksListComponent,
    TaskComponent,
    HabitsListComponent,
    HabitComponent,
    CreateNewHabitComponent,
    CreateNewTaskComponent,
    CreateNewSubtaskListComponent,
    ContactComponent,
    HomeComponent
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
