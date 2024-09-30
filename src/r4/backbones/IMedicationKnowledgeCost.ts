import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IMoney } from '../datatypes';

/**
 * @name IMedicationKnowledgeCost
 * @description Information about a medication that is used to support knowledge.
 * @see <a href="https://hl7.org/fhir/R4/medicationknowledge-definitions.html#MedicationKnowledge.cost">MedicationKnowledgeCost</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IMedicationKnowledgeCost extends IBackboneElement {
  /**
   * @description The category of the cost information.  For example, manufacturers\u0027 cost, patient cost, claim reimbursement cost, actual acquisition cost.
   */
  type: ICodeableConcept;

  /**
   * @description The source or owner that assigns the price to the medication.
   */
  source?: string;

  /**
   * @description Extensions for source
   */
  _source?: IElement;

  /**
   * @description The price of the medication.
   */
  cost: IMoney;
}
