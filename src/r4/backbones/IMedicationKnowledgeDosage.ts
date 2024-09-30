import { IBackboneElement } from '../base';
import { ICodeableConcept } from '../datatypes';
import { IDosage } from './IDosage';

/**
 * @name IMedicationKnowledgeDosage
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.administrationGuidelines.dosage">MedicationKnowledgeDosage</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeDosage extends IBackboneElement {
  /**
   * @description The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
   */
  type: ICodeableConcept;

  /**
   * @description Dosage for the medication for the specific guidelines.
   */
  dosage?: IDosage[];
}
