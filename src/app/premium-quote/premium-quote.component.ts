import { Component, OnInit } from '@angular/core';
import { PremiumCalculationResponse } from '../class/premium-calculation-response';
import { Router } from '@angular/router';
import { PdfDataService } from '../service/data/pdf-data.service';
import {saveAs} from 'file-saver/dist/FileSaver';
import { DataStorageService } from '../service/data/data-storage.service';
@Component({
    selector: 'app-premium-quote',
    templateUrl: './premium-quote.component.html',
    styleUrls: ['./premium-quote.component.css']
})
export class PremiumQuoteComponent implements OnInit {

    constructor(private data:DataStorageService,
        private route:Router,private pdf : PdfDataService) { }

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

    getPdf()
    {
        let company = "Future Generali Insurance Company Ltd.";
        this.pdf.getQuote(this.pcResponse,company,'pranay').subscribe(
            pdf => this.handleSuccess(pdf,company),
            error => this.handleError(error)
        );
    }

    handleSuccess(pdf,company)
    {
        const blob = new Blob([pdf],{type : 'application/pdf'});
        const filename =  company+"_quotation.pdf";
        saveAs(blob,filename);
    }

    handleError(error)
    {
        console.log(error);
    }
}
