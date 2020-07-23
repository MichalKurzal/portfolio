import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';



const routes: Routes = [
   // { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'main', component: AppComponent },

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }