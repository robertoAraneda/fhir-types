import { IBackboneElement } from "../base";
import { ICodeableConcept, IReference } from "../datatypes";
/**
 * @description The list of diagnosis relevant to this episode of care
 * @see <a href="https://hl7.org/fhir/R4/episodeofcare-definitions.html#EpisodeOfCare.diagnosis">EpisodeOfCareDiagnosis</a>
 * @name IEpisodeOfCareDiagnosis
 * @extends {IBackboneElement}
 */
export interface IEpisodeOfCareDiagnosis extends IBackboneElement {
    /**
     * @description Conditions/problems/diagnoses this episode of care is for
     */
    condition: IReference;
    /**
     * @description Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
     */
    role?: ICodeableConcept;
    /**
     * @description Ranking of the diagnosis (for each role type).
     */
    rank?: number;
}
