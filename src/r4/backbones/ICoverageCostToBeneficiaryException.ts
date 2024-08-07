import { IBackboneElement } from "../base";
import { ICodeableConcept, IPeriod } from "../datatypes";

export interface ICoverageCostToBeneficiaryException extends IBackboneElement {

    /**
     * @description The exception category for patient payments.
     */
    type: ICodeableConcept;

    /**
     * @description The effective period of the exception.
     */
    period?: IPeriod;
}