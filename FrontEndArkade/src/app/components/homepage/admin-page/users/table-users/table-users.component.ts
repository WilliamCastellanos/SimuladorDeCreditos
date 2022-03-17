import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IUser } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {
  public headers = ["nickName","id_client","username","perfil","state","Actions"];
  public lst : IUser[] = [];
  dataSource = new MatTableDataSource(this.lst);

  constructor(private userService:UserService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      this.lst = data;
      this.dataSource.data = this.lst;
    });
  }

  deleteUser(id :string) {
    this.userService.delete(id).subscribe(response => {
      this.ngOnInit();
      alert('Contacto eliminado!')
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}