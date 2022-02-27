import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthTokenInterceptor } from './interceptor/authtokenInterceptor';
import { InterpolationComponent } from './databinding/interpolation/interpolation.component';
import { PropertyComponent } from './databinding/property/property.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './databinding/twowaybinding/twowaybinding.component';
import { NgtrackComponent } from './databinding/ngtrack/ngtrack.component';
import { TestingComponent } from './testing/testing.component';

 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    InterpolationComponent,
    PropertyComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    NgtrackComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
 

  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    AuthenticationService
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
