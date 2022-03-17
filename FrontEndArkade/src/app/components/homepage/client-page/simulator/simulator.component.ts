import { Component, OnInit } from '@angular/core';
import { NavSimulatorService } from 'src/app/services/nav-simulator.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {

  constructor(public navSimulator: NavSimulatorService) { }

  ngOnInit(): void {
  }

  viewSimulatorNomina() {
    this.navSimulator.isPayroll = true;
    this.navSimulator.isExtraordinary = false;
    this.navSimulator.isWindowCreditr = false;
    this.navSimulator.dataSimulator = true;
  }
  viewSimulatorExtraordinario() {
    this.navSimulator.isPayroll = false;
    this.navSimulator.isExtraordinary = true;
    this.navSimulator.isWindowCreditr = false;
    this.navSimulator.dataSimulator = true;
  }
  viewSimulatorVentanilla() {
    this.navSimulator.isPayroll = false;
    this.navSimulator.isExtraordinary = false;
    this.navSimulator.isWindowCreditr = true;
    this.navSimulator.dataSimulator = true;
  }
}
