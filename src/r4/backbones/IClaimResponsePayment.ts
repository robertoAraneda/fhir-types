import { IBackboneElement, IElement } from '../base';
import { ICodeableConcept, IIdentifier, IMoney } from '../datatypes';

/**
 * @name IClaimResponsePayment
 * @description This resource provides the adjudication details from the processing of a Claim resource.
 * @see <a href="https://hl7.org/fhir/R4/claimresponse-definitions.html#ClaimResponse.payment">ClaimResponsePayment</a>
 * @version R4
 * @extends {IBackboneElement}
 * @author Claudia Alarcón Lazo
 */
export interface IClaimResponsePayment extends IBackboneElement {
  /**
   * @description Whether this represents partial or complete payment of the benefits payable.
   */
  type: ICodeableConcept;

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
  amount: IMoney;

  /**
   * @description Issuer\u0027s unique identifier for the payment instrument.
   */
  identifier?: IIdentifier;
}
