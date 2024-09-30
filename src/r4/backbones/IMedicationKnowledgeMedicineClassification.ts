import { IBackboneElement } from '../base';
import { ICodeableConcept } from '../datatypes';

/**
 * @name IMedicationKnowledgeMedicineClassification
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.medicineClassification">MedicationKnowledgeMedicineClassification</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeMedicineClassification extends IBackboneElement {
  /**
   * @description The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
   */
  type: ICodeableConcept;

  /**
   * @description Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
   */
  classification?: ICodeableConcept[];
}
