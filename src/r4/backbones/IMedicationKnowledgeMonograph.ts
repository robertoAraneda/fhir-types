import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IMedicationKnowledgeMonograph
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.monograph">MedicationKnowledgeMonograph</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeMonograph extends IBackboneElement {
  /**
   * @description The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
   */
  type?: ICodeableConcept;

  /**
   * @description Associated documentation about the medication.
   */
  source?: IReference;
}
