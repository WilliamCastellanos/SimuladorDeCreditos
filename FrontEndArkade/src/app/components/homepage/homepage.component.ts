import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  hide: boolean = true;
  isClient: boolean = false;
  user: IUser = {
    id_client: '',
    nickName: '',
    username: '',
    perfil: '',
    state: '',
    password: ''
  };
  userName = "";
  userPassWord = "";
  constructor(public userService: UserService, private formBuilder:FormBuilder) {
   }
   login = this.formBuilder.group({
    loginUser: ['',Validators.required],
    loginPassword: ['',Validators.required]
  });
  ngOnInit(): void {
    
  }

  findUser(): void {
    this.userService.findById(this.userName)
      .subscribe(
        data => {
          this.user = data;
          if (this.user.password == this.userPassWord) {
            this.userService.user = this.user;
            if (this.user.perfil == "admi") {
              this.userService.isAdmin = true;
              this.userService.isClient = false;
            } else {
              this.userService.isAdmin = false;
              this.userService.isClient = true;
            }
            this.userService.viewLogin = false;
          }
        });
  }
}
