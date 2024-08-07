import { IBackboneElement } from "../base";
import { IPeriod } from "../datatypes";
import { EncounterStatusType } from "../types";

export interface IEncounterStatusHistory extends IBackboneElement {

    /**
     * @description planned | arrived | triaged | in-progress | onleave | finished | cancelled
     * @see <a href="https://hl7.org/fhir/R4/valueset-encounter-status.html">EncounterStatus</a>
     */
    status: EncounterStatusType;

    /**
     * @description The time that the episode was in the specified status.
     */
    period: IPeriod;
}