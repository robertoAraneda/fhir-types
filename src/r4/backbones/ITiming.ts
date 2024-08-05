import { IBackboneElement, IElement } from "../base";
import { ICodeableConcept } from "../datatypes";
import { IRepeat } from "../datatypes/IRepeat";


export interface ITiming extends IBackboneElement {

    /**
     * @description Identifies specific times when the event occurs.
     */
    event?: string[];

    /**
     * @description A set of rules that describe when the event is scheduled.
     */
    repeat?: IRepeat;

    /**
     * @description A code for the timing schedule (or just text in code.text).
     */
    code?: ICodeableConcept;

    // Extensions attributes
    /**
     * @description Extensions for event
     */
    _event?: IElement[];
}