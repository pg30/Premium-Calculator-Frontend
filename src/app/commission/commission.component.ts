import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data/data-storage.service';
import { PremiumCalculationResponse } from '../class/premium-calculation-response';

@Component({
    selector: 'app-commission',
    templateUrl: './commission.component.html',
    styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {

    constructor(private data : DataStorageService) { }

    public odPremium:number=0;
    public tpPremium:number=0;
    public odpout:number=0;
    public tppout:number=0;
    public commission:number=0;
    public pcResponse:PremiumCalculationResponse;

    ngOnInit() {
        this.pcResponse = JSON.parse(this.data.getItem("pcResponse"));
        let len1 = this.pcResponse.od.length;
        let len2 = this.pcResponse.tp.length;
        this.odPremium = this.pcResponse.odData[this.pcResponse.od[len1-1]];
        this.tpPremium = this.pcResponse.tpData[this.pcResponse.tp[len2-1]];
    }

    calculate()
    {
        this.commission = Math.ceil(this.odpout*this.odPremium/100 + this.tppout*this.tpPremium/100);
    }
}
