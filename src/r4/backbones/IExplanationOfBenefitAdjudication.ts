import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IMoney } from '../datatypes';

/**
 * @name IExplanationOfBenefitAdjudication
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.item.adjudication">ExplanationOfBenefitAdjudication</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitAdjudication extends IBackboneElement {
  /**
   * @description A code to indicate the information type of this adjudication record. Information types may include: the value submitted, maximum values or percentages allowed or payable under the plan, amounts that the patient is responsible for in-aggregate or pertaining to this item, amounts paid by other coverages, and the benefit payable for this item.
   */
  category: ICodeableConcept;

  /**
   * @description A code supporting the understanding of the adjudication result and explaining variance from expected amount.
   */
  reason?: ICodeableConcept;

  /**
   * @description Monetary amount associated with the category.
   */
  amount?: IMoney;

  /**
   * @description A non-monetary value associated with the category. Mutually exclusive to the amount element above.
   */
  value?: number;

  /**
   * @description Extensions for value
   */
  _value?: IElement;
}
