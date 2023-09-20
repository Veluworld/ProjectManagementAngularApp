import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskListComponent } from './TaskList/TaskList.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TaskListService } from './tasklistservice';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import * as $ from 'jquery';
import { ajax } from "jquery";


@NgModule({
  declarations: [
    AppComponent,    
    PageNotFoundComponent,
    TaskListComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
