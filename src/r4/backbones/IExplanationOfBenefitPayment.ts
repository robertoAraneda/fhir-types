import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IMoney } from '../datatypes';

/**
 * @name IExplanationOfBenefitPayment
 * @description This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 * @see <a href="https://hl7.org/fhir/R4/explanationofbenefit-definitions.html#ExplanationOfBenefit.payment">ExplanationOfBenefitPayment</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IExplanationOfBenefitPayment extends IBackboneElement {
  /**
   * @description Whether this represents partial or complete payment of the benefits payable.
   */
  type?: ICodeableConcept;

  /**
   * @description Total amount of all adjustments to this payment included in this transaction which are not related to this claim\u0027s adjudication.
   */
  adjustment?: IMoney;

  /**
   * @description Reason for the payment adjustment.
   */
  adjustmentReason?: ICodeableConcept;

  /**
   * @description Estimated date the payment will be issued or the actual issue date of payment.
   */
  date?: string;

  /**
   * @description Extensions for date
   */
  _date?: IElement;

  /**
   * @description Benefits payable less any payment adjustment.
   */
  amount?: IMoney;

  /**
   * @description Issuer\u0027s unique identifier for the payment instrument.
   */
  identifier?: IIdentifier;
}
