import { Injectable } from '@angular/core';
import { InterestRateService } from 'src/app/services/interest-rate.service';

@Injectable({
  providedIn: 'root'
})
export class NavSimulatorService {
  isSimulator:boolean=false;
  dataSimulator:boolean=false;
  isPayroll:boolean=false;
  isExtraordinary:boolean=false;
  isWindowCreditr:boolean=false;
  nameSilmulator:string="";
  nominaInterestRate:number=0;
  extraordinaryInterestRate:number=0;
  VentanillaInterestRate:number=0;
  interestRate:number=0;


  constructor(private interestRateS:InterestRateService) { 
    interestRateS.findById("Extraordinario").subscribe(data=>{
      this.extraordinaryInterestRate =data.value;
    });
    interestRateS.findById("Nomina").subscribe(data=>{
      this.nominaInterestRate= data.value;
    });
    interestRateS.findById("Ventanilla").subscribe(data=>{
      this.VentanillaInterestRate = data.value;
    });
  }

  loadData(): string {
    if (this.isPayroll) {
      this.nameSilmulator ="Ordinario De Nomina"
      this.interestRate=this.nominaInterestRate;
    }else if(this.isExtraordinary){
      this.nameSilmulator="Extraordinario"
      this.interestRate=this.extraordinaryInterestRate;
    }else{
      this.nameSilmulator="Ventanilla"
      this.interestRate=this.VentanillaInterestRate;
    }
    return this.nameSilmulator;
  }
}
