import { IBackboneElement } from '../base';
import { IDuration, ISimpleQuantity } from '../datatypes';

/**
 * @name IMedicationKnowledgeMaxDispense
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.regulatory.maxDispense">MedicationKnowledgeMaxDispense</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeMaxDispense extends IBackboneElement {
  /**
   * @description The maximum number of units of the medication that can be dispensed.
   */
  quantity: ISimpleQuantity;

  /**
   * @description The period that applies to the maximum number of units.
   */
  period?: IDuration;
}
