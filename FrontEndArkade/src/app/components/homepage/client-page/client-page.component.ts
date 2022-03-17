import { Component, OnInit } from '@angular/core';
import { NavSimulatorService } from 'src/app/services/nav-simulator.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  constructor(private userService: UserService, public navSimulator: NavSimulatorService) { }
  showNewPassword: boolean = false;
  newPassword = "";
  hide: boolean = true;
  ngOnInit(): void {
  }

  closeAccount() {
    this.userService.isAdmin = false;
    this.userService.isClient = false;
    this.userService.viewLogin = true;
    this.showNewPassword = false;
  }

  viewOptionsSimulator() {
    this.navSimulator.isSimulator = true;
    this.showNewPassword = false
  }

  viewSettings() {
    this.navSimulator.isSimulator = false;
    this.showNewPassword = true;
  }

  editPassword() {
    this.userService.user.password = this.newPassword;
             this.userService.update(this.userService.user).subscribe(response => {
               alert('Contraseña Editada!');
              });
    }
}
