import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NotificationService } from '../services/notificationservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '/Dashboard';
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationservice: NotificationService
    ) {  
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
      // remove user from local storage to log user out
      localStorage.removeItem('TokenInfo');
      // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Dashboard';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(){

    this.submitted=true;
    if(this.loginForm.invalid)
    {
      return;
    }
    else{
      this.authenticationService.login(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value).subscribe(
        data => {
          if(data!=undefined && data.token!=""){
            this.notificationservice.showSuccess("Successfully logged in", "Success");
          this.router.navigate(['/dashboard']);
          }
          else
          {
            this.notificationservice.showError("Wrong Credentails", "Error");
          }
        }

       

      );

      
    }

  }

}
