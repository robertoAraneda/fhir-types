import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IMedicationKnowledgeRelatedMedicationKnowledge
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.relatedMedicationKnowledge">MedicationKnowledgeRelatedMedicationKnowledge</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeRelatedMedicationKnowledge extends IBackboneElement {
  /**
   * @description The category of the associated medication knowledge reference.
   */
  type: ICodeableConcept;

  /**
   * @description Associated documentation about the associated medication knowledge.
   */
  reference: IReference[];
}
