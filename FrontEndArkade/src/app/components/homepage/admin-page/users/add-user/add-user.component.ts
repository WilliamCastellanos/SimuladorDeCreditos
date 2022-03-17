import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';
import { ClientService } from 'src/app/services/client-service.service';
import { IClient } from 'src/app/models/client.interface';
import { UserService } from 'src/app/services/user.service';

interface Perfil {
  value: string;
  viewValue: string;
}
interface State {
  value: string;
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: IUser = {
    id_client: '',
    nickName: '',
    username: '',
    perfil: '',
    state: '',
    password: ''
  };
  client: IClient = {
    id: "",
    name: '',
    cellPhone: '',
    address: '',
    gender: '',
    email: '',
    dateBirth: new Date()
  };
  perfiles: Perfil[] = [
    { value: 'admi', viewValue: 'Administrador' },
    { value: 'cli', viewValue: 'Cliente' },
  ];
  states: State[] = [
    { value: 'Activo'},
    { value: 'Inactivo'},
  ];
  constructor(private userService:UserService,private clientService:ClientService) { }

  ngOnInit(): void {
  }

  add() {
    this.clientService.findById(this.user.id_client).subscribe(response => {
      this.user.username = response.name
      console.log(this.user)
      this.userService.add(this.user).subscribe(response => {
        alert('Cliente Creado!');
      });
    });
  }
}
