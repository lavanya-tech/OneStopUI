import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout.component';

import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { ContestsComponent } from './components/contests/contests.component';
import { PracticeComponent } from './components/practice/practice.component';
import { HomeComponent } from './components/home/home.component';
import { ProblemComponent } from './components/problem/problem.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ContestComponent } from './components/contest/contest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContestCardComponent } from './components/contest-card/contest-card.component';
// import { CodeEditorComponent } from './components/code-editor/code-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ContestsComponent,
    PracticeComponent,
    HomeComponent,
    ProblemComponent,

    CodeEditorComponent,
    NavbarComponent,
    ContestComponent,
    ContestCardComponent,
    // CodeEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
