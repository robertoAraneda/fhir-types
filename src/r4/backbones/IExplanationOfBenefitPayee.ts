import { IBackboneElement } from '../base';
import { ICodeableConcept, IReference } from '../datatypes';

/**
 * @name IExplanationOfBenefitPayee
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.payee">ExplanationOfBenefitPayee</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitPayee extends IBackboneElement {
  /**
   * @description Type of Party to be reimbursed: Subscriber, provider, other.
   */
  type?: ICodeableConcept;

  /**
   * @description Reference to the individual or organization to whom any payment will be made.
   */
  party?: IReference;
}
