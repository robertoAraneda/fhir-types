import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, ISimpleQuantity } from '../datatypes';

/**
 * @name IMedicationKnowledgePatientCharacteristics
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.administrationGuidelines.patientCharacteristics">MedicationKnowledgePatientCharacteristics</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgePatientCharacteristics extends IBackboneElement {
  /**
   * @description Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
   */
  characteristicCodeableConcept?: ICodeableConcept;

  /**
   * @description Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
   */
  characteristicQuantity?: ISimpleQuantity;

  /**
   * @description The specific characteristic (e.g. height, weight, gender, etc.).
   */
  value?: string;

  /**
   * @description Extensions for value
   */
  _value?: IElement;
}
