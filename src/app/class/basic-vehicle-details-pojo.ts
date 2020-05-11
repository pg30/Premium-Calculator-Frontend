import { Vehicle } from "./vehicle";

export class BasicVehicleDetailsPOJO {
    constructor(
        public vehicle:Vehicle,
        public idv:number,
        public cubicCapacity:number,
        public extCngKit:number,
        public gvw:number,
        public seatingCapacity:number,
        public isCng:boolean,
        public dateOfRegistration:string,
        public zone:string,
        public carrier:string,
        public vehicleUse:string,
        public vehicleType:string
    ){}
}
