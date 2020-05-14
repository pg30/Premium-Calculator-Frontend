import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PremiumCalculationResponse } from '../../class/premium-calculation-response';

@Injectable({
  providedIn: 'root'
})
export class PdfDataService {

    constructor(private http : HttpClient) { }

    getQuote(pcResponse : PremiumCalculationResponse,company:string,username : string)
    {
        console.log("before hitting pdf api");
        console.log(pcResponse);
        return this.http.post(`http://localhost:8080/users/${username}/pdf/${company}`,pcResponse,{responseType : 'arraybuffer'});
    }
}
