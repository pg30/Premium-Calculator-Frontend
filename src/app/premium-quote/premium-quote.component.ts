import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { PremiumDataService } from '../service/premium-data.service';
import { PremiumCalculationResponse } from '../class/premium-calculation-response';
import { Router } from '@angular/router';

@Component({
    selector: 'app-premium-quote',
    templateUrl: './premium-quote.component.html',
    styleUrls: ['./premium-quote.component.css']
})
export class PremiumQuoteComponent implements OnInit {

    constructor(private data:DataStorageService,
        private route:Router) { }

    public basData:Map<String,String>;
    public tpData:Map<string,string>;
    public odData:Map<string,string>;
    public finalData:Map<string,string>;
    public bas:string[];
    public tp:string[];
    public od:string[];
    public fin:string[];
    public pcResponse:PremiumCalculationResponse;

    ngOnInit() {
        this.pcResponse = JSON.parse(this.data.getItem("pcResponse"));
        console.log(this.pcResponse);
        this.basData = this.pcResponse.basData;
        this.tpData = this.pcResponse.tpData;
        this.odData = this.pcResponse.odData;
        this.finalData = this.pcResponse.finalData;
        this.bas = this.pcResponse.bas;
        this.tp = this.pcResponse.tp;
        this.od = this.pcResponse.od;
        this.fin = this.pcResponse.fin;
    }   

    commission()
    {
        this.route.navigate(['commission']);
    }
}
