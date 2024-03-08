import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { USERS } from 'src/app/constants/users/admin-users.const';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  users = USERS;
  validatedUser: UserModel[] = [];
  alertText = '';
  alertType: 'success' | 'warning' | 'danger' | 'none' = 'none';

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    if(localStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
    this.formLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }


  submitLogin() {
    this.validatedUser = this.filterUserandPassword(this.users, this.formLogin.value.username, this.formLogin.value.password)
    if (this.validatedUser.length > 0) {
      localStorage.setItem("user", JSON.stringify(this.validatedUser))
      location.reload();
    }
    else {
      this.alertText = 'Error, the username or password is incorrect';
      this.alertType = 'danger';
      setTimeout(() => {
        this.alertText = '';
        this.alertType = 'none';
        this.formLogin.reset();
      }, 2000);
    }
    



  }

  filterUserandPassword(users: any[], username: string, userpassword: string) {
    return users.filter((arr) => {
      return arr.user === username && arr.password === userpassword;
    });
  }

}
