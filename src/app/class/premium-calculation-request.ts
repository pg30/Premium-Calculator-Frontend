import { BasicVehicleDetailsPOJO } from "./basic-vehicle-details-pojo";
import { TpPremiumPOJO } from "./tp-premium-pojo";
import { OdPremiumPOJO } from "./od-premium-pojo";

export class PremiumCalculationRequest {
    constructor(
        public basicVehicleDetailsPOJO:BasicVehicleDetailsPOJO,
        public tpPremiumPOJO: TpPremiumPOJO,
        public odPremiumPOJO: OdPremiumPOJO
    ){}
}
