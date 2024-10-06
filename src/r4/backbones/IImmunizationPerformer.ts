import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IImmunizationPerformer
 * @description Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 * @see <a href="https://hl7.org/fhir/R4/immunization-definitions.html#Immunization.performer">ImmunizationPerformer</a>
 * @version R4
 * @extends {IBackboneElement}
 * @uthor Claudia Alarcón Lazo
 */
export interface IImmunizationPerformer extends IBackboneElement {
  /**
   * @description Describes the type of performance (e.g. ordering provider, administering provider, etc.).
   */
  function?: ICodeableConcept;

  /**
   * @description The practitioner or organization who performed the action.
   */
  actor: IReference;
}
