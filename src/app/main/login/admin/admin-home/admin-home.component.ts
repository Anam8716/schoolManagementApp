import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  username: any;
  id: any;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    let user: any = localStorage.getItem('user');
    user = JSON.parse(user);
    this.username = user.username;
    this.id = user.id;

    let token: any = localStorage.getItem('key');
    const headers = new HttpHeaders;
    headers.append('Authorization', token);
    this.http.get('http://localhost:3000/users/getProfile', {headers: headers}).subscribe(
      resp => {
        let ans: any = resp;
        console.log(ans);
      }
    );

  }

}
