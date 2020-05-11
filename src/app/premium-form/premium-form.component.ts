import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../class/vehicle';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { BasicVehicleDetailsPOJO } from '../class/basic-vehicle-details-pojo';
import { TpPremiumPOJO } from '../class/tp-premium-pojo';
import { OdPremiumPOJO } from '../class/od-premium-pojo';
import { PremiumCalculationRequest } from '../class/premium-calculation-request';
import { PremiumDataService } from '../service/premium-data.service';
import { DataStorageService } from '../service/data-storage.service';

@Component({
    selector: 'app-premium-form',
    templateUrl: './premium-form.component.html',
    styleUrls: ['./premium-form.component.css'],
    providers: [DatePipe]
})
export class PremiumFormComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private router : Router,
        private datePipe: DatePipe,
        private premiumDataService: PremiumDataService,
        private data : DataStorageService) { }

    carrierVal: string[] = ["Public", "Private"];
    zoneVal: string[] = ["A", "B"];
    vehicleTypeVal: string[] = ["Tractor", "Ambulance", "Drilling Rigs", "Trailer"];
    vehicleUseVal: string[] = ["Agricultural", "Others"];
    ncbVal: number[] = [0, 20, 25, 35, 45, 50];

    date = new Date();
    month = '' + (this.date.getMonth() + 1);
    day = '' + this.date.getDate();
    year = this.date.getFullYear();

    vehicle: Vehicle = null;
    idv: number = 0;
    cubicCapacity: number = 0;
    gvw: number = 0
    seatingCapacity: number = 0;
    cng = {
        isCng: false,
        extCngKit: 0
    };
    dateOfRegistration: string = null;
    zone: string = this.zoneVal[0];
    carrier: string = this.carrierVal[0];
    vehicleUse: string = this.vehicleUseVal[0];
    vehicleType: string = this.vehicleTypeVal[0];

    zeroDepRate: number = 0;
    elec: number = 0;
    nonelec: number = 0;
    ncb: number = this.ncbVal[0];
    odDisc: number = 0;
    wantImt23: boolean = false;
    wantGeoExt: boolean = false;
    wantOverturning: boolean = false;

    paToDriver: number = 0;
    llToDriver: number = 0;
    paToUnnamedPassenger: number = 0;
    nfpp: number = 0;
    lessTppd: boolean = false;

    ngOnInit() {
        this.vehicle = new Vehicle(this.route.snapshot.params['id'], this.route.snapshot.params['name'], null);

        if (this.vehicle.id != 1 && this.vehicle.id != 2)
            this.zoneVal.push("C");
        if (this.month.length < 2)
            this.month = '0' + this.month;
        if (this.day.length < 2)
            this.day = '0' + this.day;
        this.dateOfRegistration = [this.year, this.month, this.day].join('-');
    }
    //this.datePipe.transform(dateOfRegistration,'dd-MM-yyyy' send date in this format

    calculate() {
        let basicVehicleDetailsPOJO = new BasicVehicleDetailsPOJO(this.vehicle, this.idv, this.cubicCapacity, this.cng.extCngKit, this.gvw,
            this.seatingCapacity, this.cng.isCng, this.datePipe.transform(this.dateOfRegistration, 'dd-MM-yyyy'), this.zone, this.carrier,
            this.vehicleUse, this.vehicleType);

        let tpPremiumPOJO = new TpPremiumPOJO(this.paToDriver, this.llToDriver, this.paToUnnamedPassenger, this.nfpp, this.lessTppd);

        let odPremiumPOJO = new OdPremiumPOJO(this.zeroDepRate, this.elec, this.nonelec, this.ncb, this.odDisc, this.wantImt23, this.wantGeoExt, this.wantImt23);

        let pcRequest = new PremiumCalculationRequest(basicVehicleDetailsPOJO, tpPremiumPOJO, odPremiumPOJO);

        this.premiumDataService.getQuote(pcRequest, "pranay garg").subscribe(
            response => this.handleSuccess(response),
            error => this.handleError(error)
        );
    }

    handleSuccess(response) {
        this.data.setItem("pcResponse",JSON.stringify(response));
        console.log(response);
        this.router.navigate(['/quote']);
    }

    handleError(error) {
        console.log(error);
    }
}
