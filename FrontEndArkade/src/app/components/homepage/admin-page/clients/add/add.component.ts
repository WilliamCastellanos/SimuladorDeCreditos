import { Component, OnInit } from '@angular/core';
import { IClient } from 'src/app/models/client.interface';
import { ClientService } from 'src/app/services/client-service.service';
import { FormBuilder, Validators } from '@angular/forms';
interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  client: IClient = {
    id: "",
    name: '',
    cellPhone: '',
    address: '',
    gender: '',
    email: '',
    dateBirth: new Date()
  };
  genders: Gender[] = [
    { value: 'F', viewValue: 'Mujer' },
    { value: 'M', viewValue: 'Homdre' },
  ];
  constructor(private clientService: ClientService,  private formBuilder:FormBuilder) {
  }
  addForm = this.formBuilder.group({
    clientId: ['',Validators.required],
    clientName: ['',Validators.required],
    clientCellPhone:['',Validators.required],
    clientAdress:['',Validators.required],
    clientGender:['',Validators.required],
    clientEmail:['',Validators.email],
    clienDateBirth:['',Validators.required,]
  });

  ngOnInit(): void {
  }

  add() {
    this.clientService.add(this.client).subscribe(response => {
      alert('Cliente Creado!');
    });
  }
}
