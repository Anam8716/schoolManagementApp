import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: any;
  password: any;

  constructor(
    public http: HttpClient,
    private router: Router
    ) {}

  ngOnInit() {
  }

  onSubmit(e) {
    console.log(e);
  console.log(this.username);

  console.log(this.password);

  const data = {
    username: this.username,
    password: this.password
  };

  const headers = new HttpHeaders;
  headers.append('content', 'application/json');

  this.http.post('http://localhost:3000/users/login', data, { headers: headers}).subscribe(resp => {
    let ans: any = resp;
    if (ans.success) {
      console.log('Successfully Logged In');
      console.log(ans.token);
      // save in localvariable to authenticate
      ans.user = JSON.stringify(ans.user);
      localStorage.setItem('user', ans.user);
      localStorage.setItem('key', ans.token);
      this.router.navigate(['/adminHome']);
    } else {
      console.log(ans.msg);
    }
  });

  }
}
