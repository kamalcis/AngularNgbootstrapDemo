import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SuperHeroComponent } from './pages/super-hero/super-hero.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'superhero', component: SuperHeroComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
