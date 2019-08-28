import { HttpClientService } from './../http-client.service';
import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private httpClient: HttpClientService) { }

  ngOnInit() { }

  onSubmit() {
    this.signupInfo = new SignUpInfo(
      this.form.username,
      this.form.email,
      this.form.password,
      this.selectedRoles(this.form.admin, this.form.user)
    );

    console.log(this.signupInfo);

    this.httpClient.createUser(this.signupInfo).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  selectedRoles(admin: boolean, user: boolean): string[] {
    let arr = [];
    if (admin && user) {
      arr = ['admin', 'user'];
    } else if (admin) {
      arr = ['admin'];
    } else {
      arr = ['user'];
    }
    return arr;
  }
}
