import { IBackboneElement, IElement } from "../base";
import { ICodeableConcept } from "../datatypes";

export interface IHealthcareServiceEligibility extends IBackboneElement {

    /**
     * @description Coded value for the eligibility.
     */
    code?: ICodeableConcept;

    /**
     * @description Describes the eligibility conditions for the service.
     */
    comment?: string;

    // Extensions attributes
    /**
     * @description Extensions for comment
     */
    _comment?: IElement;
}