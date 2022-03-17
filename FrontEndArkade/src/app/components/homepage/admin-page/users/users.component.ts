import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IUser } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  showWindow:boolean=true;
  
  constructor(private userService:UserService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
   
  }

  deleteClient(id :string) {
    
  }
}
