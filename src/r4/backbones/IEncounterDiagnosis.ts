import { IBackboneElement, IElement } from "../base";
import { ICodeableConcept, IReference } from "../datatypes";

export interface IEncounterDiagnosis extends IBackboneElement {
    
    /**
    * @description Reason the encounter takes place, as specified using information from another resource.
    */
    condition: IReference;

    /**
    * @description Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
    */
    use?: ICodeableConcept;

    /**
    * @description Ranking of the diagnosis (for each role type).
    */
    rank?: number;

    // Extensions attributes
    /**
    * @description Extension for rank
    */
    _rank?: IElement;
}