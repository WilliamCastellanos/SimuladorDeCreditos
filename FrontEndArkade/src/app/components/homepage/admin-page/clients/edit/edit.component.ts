import { Component, OnInit } from '@angular/core';
import { IClient } from 'src/app/models/client.interface';
import { ClientService } from 'src/app/services/client-service.service';

interface Gender {
  value: string;
  viewValue:string;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    client: IClient = {
      id:"",
      name: '',
      cellPhone: '' ,
      address: '',
      gender: '', 
      email : '' ,
      dateBirth: new Date()
  };
  genders: Gender[] = [
    {value: 'F', viewValue: 'Mujer'},
  {value: 'M', viewValue: 'Homdre'},
  ];
    constructor(private clientService:ClientService) { 
      this.client = this.clientService.clientEdited;
    }
  
    ngOnInit(): void {
    }

    findClient(id: string): void {
      this.clientService.findById(id)
        .subscribe(
          data => {
            this.client = data;
          });
    }
  
    updateClient() {
      this.clientService.update(this.client).subscribe(response => {
        alert('Cliente Editado!');
      });
    }
  }
  