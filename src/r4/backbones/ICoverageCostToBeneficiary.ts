import { IBackboneElement } from "../base";
import { ICodeableConcept, IMoney, ISimpleQuantity } from "../datatypes";
import { ICoverageCostToBeneficiaryException } from "./ICoverageCostToBeneficiaryException";

export interface ICoverageCostToBeneficiary extends IBackboneElement {

    /**
     * @description The category of patient centric costs associated with treatment.
     */
    type?: ICodeableConcept;

    /**
     * @description The quantity amount due from the patient for the cost category.
     */
    valueQuantity: ISimpleQuantity;

    /**
     * @description The money amount due from the patient for the cost category.
     */
    valueMoney: IMoney;

    /**
     * @description A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
     */
    exception?: ICoverageCostToBeneficiaryException[];
}