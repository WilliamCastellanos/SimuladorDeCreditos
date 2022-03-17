import { Component, OnInit, ViewChild } from '@angular/core';
import { IClient } from 'src/app/models/client.interface';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ClientService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-catalog-table',
  templateUrl: './catalog-table.component.html',
  styleUrls: ['./catalog-table.component.css']
})

export class CatalogTableComponent implements OnInit {
  public headers = ["id","name","cellPhone","address","Actions"];
  public lst : IClient[] = [];
  dataSource = new MatTableDataSource(this.lst);

  constructor(private clientService:ClientService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.clientService.getAll().subscribe(data => {
      this.lst = data;
      this.dataSource.data = this.lst;
    });
  }
  
  editClient(client:IClient){
    this.clientService.clientEdited=client;
  }

  deleteClient(id :string) {
    this.clientService.delete(id).subscribe(response => {
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
