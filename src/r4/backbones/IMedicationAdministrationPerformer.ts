import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IMedicationAdministrationPerformer
 * @description Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 * @see <a href="https://hl7.org/fhir/R4/medicationadministration-definitions.html#MedicationAdministration.performer">MedicationAdministrationPerformer</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationAdministrationPerformer extends IBackboneElement {
  /**
   * @description Distinguishes the type of involvement of the performer in the medication administration.
   */
  function?: ICodeableConcept;

  /**
   * @description Indicates who or what performed the medication administration.
   */
  actor: IReference;
}
