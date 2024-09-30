import { IBackboneElement } from '../base';
import { ICodeableConcept, ISimpleQuantity } from '../datatypes';

/**
 * @name IMedicationKnowledgePackaging
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.packaging">MedicationKnowledgePackaging</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgePackaging extends IBackboneElement {
  /**
   * @description A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottle).
   */
  type?: ICodeableConcept;

  /**
   * @description The number of product units the package would contain if fully loaded.
   */
  quantity?: ISimpleQuantity;
}
