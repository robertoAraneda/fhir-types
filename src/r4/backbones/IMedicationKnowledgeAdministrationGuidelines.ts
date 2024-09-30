import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';
import { IMedicationKnowledgeDosage } from './IMedicationKnowledgeDosage';
import { IMedicationKnowledgePatientCharacteristics } from './IMedicationKnowledgePatientCharacteristics';

/**
 * @name IMedicationKnowledgeAdministrationGuidelines
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.administrationGuidelines">MedicationKnowledgeAdministrationGuidelines</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeAdministrationGuidelines extends IBackboneElement {
  /**
   * @description Dosage for the medication for the specific guidelines.
   */
  dosage?: IMedicationKnowledgeDosage[];

  /**
   * @description Indication for use that apply to the specific administration guidelines.
   */
  indicationCodeableConcept?: ICodeableConcept;

  /**
   * @description Indication for use that apply to the specific administration guidelines.
   */
  indicationReference?: IReference;

  /**
   * @description Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.).
   */
  patientCharacteristics?: IMedicationKnowledgePatientCharacteristics[];
}
