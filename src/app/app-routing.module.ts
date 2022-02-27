import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {InterpolationComponent} from './databinding/interpolation/interpolation.component';
import {PropertyComponent} from './databinding/property/property.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding/twowaybinding.component';
import { NgtrackComponent } from './databinding/ngtrack/ngtrack.component';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, children:[

    {path:'interpolation', component:InterpolationComponent,canActivate:[AuthGuard]},
    {path:'property', component:PropertyComponent,canActivate:[AuthGuard]},
    {path:'event', component:EventbindingComponent,canActivate:[AuthGuard]},
    {path:'twoway', component:TwowaybindingComponent,canActivate:[AuthGuard]},
    {path:'ngtrack', component:NgtrackComponent,canActivate:[AuthGuard]}
  ], 
  canActivate:[AuthGuard]
 
  },

  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
