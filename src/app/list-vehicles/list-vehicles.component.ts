import { Component, OnInit } from '@angular/core';
import { VehicleDataService } from '../service/data/vehicle-data.service';
import { Router } from '@angular/router';
import { Vehicle } from '../class/vehicle';

@Component({
    selector: 'app-list-vehicles',
    templateUrl: './list-vehicles.component.html',
    styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

    constructor(private vehicleDataService : VehicleDataService,private router : Router) { }

    vehicles : Vehicle[];
    errorMessage = '';

    ngOnInit() {
        this.vehicleDataService.getVehicleList("pranay garg").subscribe(
            response => this.handleSuccess(response),
            error => this.handleError(error)
        );
    }

    handleSuccess(response)
    {
        this.vehicles = response;
        console.log(this.vehicles);
    }

    handleError(error)
    {
        console.log(error.error.message);
        this.errorMessage = error.error.message;
    }

    calculatePremium(vehicle)
    {
        this.router.navigate(['calculate',vehicle.id,vehicle.name]);
    }
}
