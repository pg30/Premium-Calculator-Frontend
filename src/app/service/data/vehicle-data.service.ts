import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/app/class/vehicle';

@Injectable({
    providedIn: 'root'
})
export class VehicleDataService {

    constructor(private http: HttpClient) { }

    getVehicleList(username)
    {
        return this.http.get<Vehicle[]>(`http://localhost:8080/users/${username}/vehicles`);
    }
}
