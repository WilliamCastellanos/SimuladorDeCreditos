import { Component, OnInit } from '@angular/core';
import { InterestRateService } from 'src/app/services/interest-rate.service';
import { IInterestRate } from 'src/app/models/interestRate.interface';
import { NavSimulatorService } from 'src/app/services/nav-simulator.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  interestData: IInterestRate[]=[];
  extraordinario: IInterestRate={
    nameInteresRate: "",
    value: 0
  }
  nomina: IInterestRate={
    nameInteresRate: "",
    value: 0
  }
  ventanilla: IInterestRate={
    nameInteresRate: "",
    value: 0
  }

  constructor(private interestRate:InterestRateService,private navServices:NavSimulatorService) { 
    interestRate.findById("Extraordinario").subscribe(data=>{
      this.extraordinario= data;
      navServices.extraordinaryInterestRate = data.value;
    });
    interestRate.findById("Nomina").subscribe(data=>{
      this.nomina= data;
      navServices.nominaInterestRate= data.value;
    });
    interestRate.findById("Ventanilla").subscribe(data=>{
      this.ventanilla= data;
      navServices.VentanillaInterestRate = data.value;
    });
  }

  ngOnInit(): void {
  }

  updateExtraordinario(){
    this.navServices.extraordinaryInterestRate = this.extraordinario.value;
    this.interestRate.update(this.extraordinario).subscribe(response => {
      alert('Tasa Editada!');
    });
  }
  
  updateNomina(){
    this.navServices.nominaInterestRate = this.nomina.value;
    this.interestRate.update(this.nomina).subscribe(response => {
      alert('Tasa Editada!');
    });;
  }

  updateVentanilla(){
    this.navServices.VentanillaInterestRate = this.ventanilla.value;
    this.interestRate.update(this.ventanilla).subscribe(response => {
      alert('Tasa Editada!');
    });;
  }
}
