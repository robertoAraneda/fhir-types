import { IBackboneElement, IElement } from "../base";
import { IPeriod } from "../datatypes";

export interface IHealthcareServiceNotAvailable extends IBackboneElement {
    
        /**
        * @description The reason that can be presented to the user as to why this time is not available.
        */
        description: string;

        /**
         * @description Service is not available (seasonally or for a public holiday) from this date.
         */
        during?: IPeriod;
    
        // Extensions attributes
        /**
        * @description Extensions for description
        */
        _description?: IElement;
    }