import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './Pages/Views/landing-page/landing-page.component';
import {ProjectsComponent} from './Pages/Views/projects/projects.component';
import {AboutComponent} from './Pages/Views/about/about.component';
import {InterestsComponent} from './Pages/Views/interests/interests.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'interests', component: InterestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
