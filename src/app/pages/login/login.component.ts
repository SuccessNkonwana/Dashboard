import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  exampleInputEmail: string = "";
  exampleInputPassword: string = "";
  message: string = ""

  constructor(private route:Router) { }

  ngOnInit() {
  }

  logIn(){
    try{
      if(this.exampleInputEmail == "admin" && this.exampleInputPassword == "admin"){
        this.route.navigateByUrl("home")
      }
      else{
        this.message = "Incorrect credentials";
      }

    }
    catch(error){
      console.error(error);
    }
  }

}
