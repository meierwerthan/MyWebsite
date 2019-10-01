import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './Pages/Views/landing-page/landing-page.component';
import { NavigationComponent } from './Navigation/navigation/navigation.component';
import {MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { ProjectsComponent } from './Pages/Views/projects/projects.component';
import { AboutComponent } from './Pages/Views/about/about.component';
import { InterestsComponent } from './Pages/Views/interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationComponent,
    ProjectsComponent,
    AboutComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
