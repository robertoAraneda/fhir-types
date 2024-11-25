import { IBackboneElement } from '../base';
import { ICodeableConcept, IMoney } from '../datatypes';

/**
 * @name IExplanationOfBenefitTotal
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.total">ExplanationOfBenefitTotal</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitTotal extends IBackboneElement {
  /**
   * @description A code to indicate the information type of this adjudication record. Information types may include: the value submitted, maximum values or percentages allowed or payable under the plan, amounts that the patient is responsible for in aggregate or pertaining to this item, amounts paid by other coverages, and the benefit payable for this item.
   */
  category: ICodeableConcept;

  /**
   * @description Monetary total amount associated with the category.
   */
  amount: IMoney;
}
