import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PremiumCalculationRequest } from '../class/premium-calculation-request';
import { PremiumCalculationResponse } from '../class/premium-calculation-response';

@Injectable({
  providedIn: 'root'
})
export class PremiumDataService {

    constructor(private http: HttpClient) { }

    getQuote(pcRequest : PremiumCalculationRequest,username : string)
    {
        console.log("before hitting calculate api");
        console.log(pcRequest);
        return this.http.post<PremiumCalculationResponse>(`http://localhost:8080/users/${username}/premium`,pcRequest);
    }
}
    