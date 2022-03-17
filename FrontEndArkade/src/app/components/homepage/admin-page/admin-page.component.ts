import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  closeAccount(){
    this.userService.isAdmin = false;
    this.userService.isClient = false;
    this.userService.viewLogin = true;
  }
}
