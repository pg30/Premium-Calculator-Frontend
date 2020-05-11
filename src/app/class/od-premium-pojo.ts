export class OdPremiumPOJO {

    constructor(
        public zeroDepRate:number,
        public elec:number,
        public nonelec:number,
        public ncb:number,
        public odDisc:number,
        public wantImt23:boolean,
        public wantGeoExt:boolean,
        public wantOverturning: boolean
    ){}
}
