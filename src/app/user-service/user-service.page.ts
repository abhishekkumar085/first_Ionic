import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'; 




@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.page.html',
  styleUrls: ['./user-service.page.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class UserServicePage implements OnInit {
  httpClient: any;
 


constructor(private http:HttpClient) { }
 getdata(){
  let url="https://jsonplaceholder.typicode.com/todos";
  // let url='https://api.api-ninjas.com/';
  return this.http.get(url);
 }

// api=fetch("https://jsonplaceholder.typicode.com/").then(()=>{
//   console.log(this.api)

// }).catch((err)=>{
//   console.log(err)
// })
  ngOnInit() {
  }

}
