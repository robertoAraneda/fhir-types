import { IBackboneElement, IElement } from "../base";
import { ICodeableConcept } from "../datatypes";

export interface ICoverageClass extends IBackboneElement {

    /**
     * @description The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
     */
    type: ICodeableConcept;

    /**
     * @description The alphanumeric string value associated with the insurer issued label.
     */
    value: string;

    /**
     * @description A short description for the class.
     */
    name?: string;

    // Extensions attributes
    /**
     * @description Extension for value
     */
    _value: IElement;

    /**
     * @description Extension for name
     */
    _name?: IElement;
}