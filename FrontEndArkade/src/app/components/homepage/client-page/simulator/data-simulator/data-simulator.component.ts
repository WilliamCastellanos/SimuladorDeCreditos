import { Component, OnInit, ViewChild } from '@angular/core';
import { NavSimulatorService } from 'src/app/services/nav-simulator.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-data-simulator',
  templateUrl: './data-simulator.component.html',
  styleUrls: ['./data-simulator.component.css']
})
export class DataSimulatorComponent implements OnInit {
  nameSilmulator: string = "";
  creditValue: number = 0;
  monthlyFees: number = 0;
  monthlyFee: number = 0;
  payment: number = 0;
  public headers = ["Cuota", "FechaDePago", "Capital", "Interes", "ValorCuota"];
  public lst: DataTable[] = [];
  dataCredit: DataCredit = new DataCredit(0, 0, 0, 0, 0, 0);
  dataSource = new MatTableDataSource(this.lst);;


  constructor(public navSimulator: NavSimulatorService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  calculateFee() {
    this.dataCredit.FDOSOLIDARIDAD = (this.creditValue * 0.01) / this.monthlyFees;
    this.dataCredit.SEGUROFIN = (this.creditValue * 0.02) / this.monthlyFees;
    this.dataCredit.Interes = this.creditValue * this.navSimulator.interestRate;
    this.payment = (this.navSimulator.interestRate * this.creditValue) / (1 - (Math.pow((1 + this.navSimulator.interestRate), -this.monthlyFees)));
    this.payment = this.payment + this.dataCredit.FDOSOLIDARIDAD + this.dataCredit.SEGUROFIN;
    this.dataCredit.CAPITAL = (this.payment - this.dataCredit.Interes - this.dataCredit.FDOSOLIDARIDAD - this.dataCredit.SEGUROFIN);
    this.dataCredit.CUOTA = (this.dataCredit.CAPITAL + this.dataCredit.Interes + this.dataCredit.FDOSOLIDARIDAD + this.dataCredit.SEGUROFIN);
    this.dataCredit.SALDOCAPITAL = (this.creditValue - this.dataCredit.CAPITAL);
    this.monthlyFee = Math.round(this.dataCredit.CUOTA);
    this.lst = [];
    this.dataSource.data = this.lst;
    this.approximateToInteger();
  }

  approximateToInteger() {
    this.dataCredit.FDOSOLIDARIDAD = Math.round(this.dataCredit.FDOSOLIDARIDAD);
    this.dataCredit.SEGUROFIN = Math.round(this.dataCredit.SEGUROFIN);
    this.dataCredit.Interes = Math.round(this.dataCredit.Interes);
    this.dataCredit.CUOTA = Math.round(this.dataCredit.CUOTA);
    this.dataCredit.CAPITAL = Math.round(this.dataCredit.CAPITAL);
    this.dataCredit.SALDOCAPITAL = Math.round(this.dataCredit.SALDOCAPITAL);
  }
  simulator() {
    if (this.navSimulator.isPayroll) {
      this.loadDataPayroll();
    } else if (this.navSimulator.isExtraordinary) {
      this.loadDataExtraordinary();
    } else {
      this.loadDataVentanilla();
    }
    this.dataSource.data = this.lst;
  }

  loadDataPayroll() {
    const fecha = new Date
    var year = new Date().getFullYear()
    var day = fecha.getDate();
    var actualMonth = fecha.getMonth() + 1;
    for (let i = 0; i < this.monthlyFees; i++) {
      actualMonth++;
      if (actualMonth > 12) {
        actualMonth = 1;
        year++;
      }
      this.lst.push(new DataTable("" + (i + 1), "" + actualMonth + "/" + day + "/" + year, "" + this.dataCredit.Interes,
        "" + this.dataCredit.CAPITAL, "" + this.dataCredit.CUOTA));
      this.dataCredit.Interes = this.dataCredit.SALDOCAPITAL * this.navSimulator.interestRate;
      this.dataCredit.CAPITAL = (this.payment - this.dataCredit.Interes - this.dataCredit.FDOSOLIDARIDAD - this.dataCredit.SEGUROFIN);
      this.dataCredit.CUOTA = (this.dataCredit.FDOSOLIDARIDAD + this.dataCredit.SEGUROFIN + this.dataCredit.Interes + this.dataCredit.CAPITAL);
      this.dataCredit.SALDOCAPITAL = (this.dataCredit.SALDOCAPITAL - this.dataCredit.CAPITAL);
      this.approximateToInteger();
    }
  }

  loadDataExtraordinary() {
    this.dataCredit.Interes = this.creditValue * this.navSimulator.interestRate;
    var SEGURO=1000;
    this.dataCredit.CAPITAL = 100000;
    this.dataCredit.CUOTA = (this.dataCredit.CAPITAL + this.dataCredit.Interes + SEGURO);
    this.dataCredit.SALDOCAPITAL = (this.creditValue - this.dataCredit.CAPITAL);
    this.monthlyFee = Math.round(this.dataCredit.CUOTA);
    this.approximateToInteger();
    const fecha = new Date
    var year = new Date().getFullYear()
    var day = fecha.getDate();
    var actualMonth = fecha.getMonth() + 1;
    for (let i = 0; i < this.monthlyFees; i++) {
      actualMonth++;
      if (actualMonth > 12) {
        actualMonth = 1;
        year++;
      }
      this.lst.push(new DataTable("" + (i + 1), "" + actualMonth + "/" + day + "/" + year, "" + this.dataCredit.Interes,
        "" + this.dataCredit.CAPITAL, "" + this.dataCredit.CUOTA));
      this.dataCredit.Interes = this.dataCredit.SALDOCAPITAL * this.navSimulator.interestRate;
      this.dataCredit.CUOTA = (this.dataCredit.CAPITAL + this.dataCredit.Interes + SEGURO);
      this.dataCredit.SALDOCAPITAL = (this.dataCredit.SALDOCAPITAL - this.dataCredit.CAPITAL);
      this.approximateToInteger();
    }
  }

    loadDataVentanilla(){
    const fecha = new Date
    var year = new Date().getFullYear()
    var day = fecha.getDate();
    var actualMonth = fecha.getMonth() + 1;
    for (let i = 0; i < this.monthlyFees; i++) {
      actualMonth++;
      if (actualMonth > 12) {
        actualMonth = 1;
        year++;
      }
      this.lst.push(new DataTable("" + (i + 1), "" + actualMonth + "/" + day + "/" + year, "" + this.dataCredit.Interes,
        "" + this.dataCredit.CAPITAL, "" + this.dataCredit.CUOTA));
      this.dataCredit.Interes = this.dataCredit.SALDOCAPITAL * this.navSimulator.interestRate;
      this.dataCredit.CAPITAL = (this.payment - this.dataCredit.Interes - this.dataCredit.FDOSOLIDARIDAD - this.dataCredit.SEGUROFIN);
      this.dataCredit.CUOTA = (this.dataCredit.FDOSOLIDARIDAD + this.dataCredit.SEGUROFIN + this.dataCredit.Interes + this.dataCredit.CAPITAL);
      this.dataCredit.SALDOCAPITAL = (this.dataCredit.SALDOCAPITAL - this.dataCredit.CAPITAL);
      this.approximateToInteger();
    }
    }
  }
export class DataTable { constructor(public Cuota: string, public FechaDePago: string, public Interes: string, public Capital: string, public ValorCuota: string) { } }
export class DataCredit { constructor(public FDOSOLIDARIDAD: number, public SEGUROFIN: number, public Interes: number, public CAPITAL: number, public CUOTA: number, public SALDOCAPITAL: number) { } }
