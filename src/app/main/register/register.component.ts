import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: any;
  password: any;

  constructor(
    public http: HttpClient
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

  this.http.post('http://localhost:3000/users/signup', data, { headers: headers}).subscribe(resp => {
    let ans: any = resp;
    if (ans.success) {
      console.log('Successfully Registered');
    } else {
      console.log(ans.msg);
    }
  });

  }
}
