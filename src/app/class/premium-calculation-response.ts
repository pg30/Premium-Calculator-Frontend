export class PremiumCalculationResponse {
    constructor(
        public basData:Map<string,string>,
        public tpData:Map<string,string>,
        public odData:Map<string,string>,
        public finalData:Map<string,string>,
        public bas:string[],
        public tp:string[],
        public od:string[],
        public fin:string[]
    ){}
}
