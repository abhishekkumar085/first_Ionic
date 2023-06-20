import { Component, OnInit } from '@angular/core';
import { UserServicePage } from '../user-service/user-service.page';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


  //  interface datas {
  //   userId:Number;
  //   id:Number;
  //   title:String;
  //   Completed:String;
  //  }

export class HomePage implements OnInit {
  hero: any;
  xyz: any=[];

  constructor(private data:UserServicePage){

  }

  //   datas:any;
  //   myd:any = [];
  // constructor(private user : UserServicePage) {
  //   this.user.getdata().subscribe(data => {
  //     //  console.log("data"+ JSON.stringify( data));
  //      this.datas = data;
  //      this.myd = JSON.stringify(this.datas);
  //      console.log("myddata"+ this.myd);
       
       
  //   })
  //  }

  ngOnInit() {
    this.data.getdata().subscribe(Response => {
 
      // If response comes hideloader() function is called
      // to hide that loader
      
      // console.log("testing"+JSON.stringify(Response))
      this.xyz = Response;
      // console.log(this.lis);
      
      // this.li=Response;
      // this.lis=this.li.id;
    });
   
// The url of api is passed to get() and then subscribed and
// stored the response to li element data array list[] is created
// using JSON element property
    

  }}

